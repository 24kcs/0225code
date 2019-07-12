function Compile(el, vm) {
    //保存vm实例对象
    this.$vm = vm;
    //获取el对应的标签元素
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    //判断当前容器标签是否存在
    if (this.$el) {
        //把容器标签中所有的节点,全部移动到文档碎片中
        this.$fragment = this.node2Fragment(this.$el);
        //真正的解析
        this.init();
        //compileElement( this.$fragment)
        //把文档碎片重新添加到容器对象中
        this.$el.appendChild(this.$fragment);
    }
}

Compile.prototype = {
    //创建一个文档碎片对象
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(),
            child;

        // 将原生节点拷贝到fragment
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        //返回文档碎片对象
        return fragment;
    },

    init: function() {
        this.compileElement(this.$fragment);
    },

    //真真的模版解析
    compileElement: function(el) {
        //获取当前文档碎片对象中所有的节点
        var childNodes = el.childNodes,
        //把当前编译对象保存
            me = this;
        //遍历每个节点,
        [].slice.call(childNodes).forEach(function(node) {
            //获取节点内容
            var text = node.textContent;
            //插值正则表达式
            var reg = /\{\{(.*)\}\}/;
            //判断当前节点是不是标签
            if (me.isElementNode(node)) {
                //开始解析
                me.compile(node);
                //是文本节点,同时还要匹配插值正则表达式
            } else if (me.isTextNode(node) && reg.test(text)) {
                //文本节点是插值
                me.compileText(node, RegExp.$1.trim());
            }
            //如果当前的节点中还有子节点,就继续的遍历(-----递归----)
            if (node.childNodes && node.childNodes.length) {
                me.compileElement(node);
            }
        });
    },

    compile: function(node) {
        //获取当前的节点中的所有的属性
        var nodeAttrs = node.attributes,
        //保存的是当前的编译对象
            me = this;
        //将伪数组转真数组同时遍历所有的属性
        [].slice.call(nodeAttrs).forEach(function(attr) {
            //获取属性的名字:--------v-on:click
            var attrName = attr.name;
            //判断该属性是不是指令属性
            if (me.isDirective(attrName)) {
                //获取属性的值: "showName"
                var exp = attr.value;
                //获取到的指令:  on:click
                var dir = attrName.substring(2);
                // 判断当前的指令是不是事件指令-----是不是on开头的
                if (me.isEventDirective(dir)) {
                    //此时是事件指令
                    compileUtil.eventHandler(node, me.$vm, exp, dir);
                   
                } else {
                     // 普通指令
                    compileUtil[dir] && compileUtil[dir](node, me.$vm, exp);
                }
                //干掉所有的节点中的属性
                node.removeAttribute(attrName);
            }
        });
    },

    compileText: function(node, exp) {
        //获取到的正则表达式去vm实例对象中找对应的属性,获取该属性的值,把整个插值全部替换成真正的属性
        //{{msg}}----界面显示的效果: abc
        compileUtil.text(node, this.$vm, exp);
    },

    isDirective: function(attr) {
        return attr.indexOf('v-') == 0;
    },

    isEventDirective: function(dir) {
        return dir.indexOf('on') === 0;
    },

    isElementNode: function(node) {
        return node.nodeType == 1;
    },

    isTextNode: function(node) {
        return node.nodeType == 3;
    }
};

// 指令处理集合
var compileUtil = {
    //v-txt的指令
    //调用了bind方法
    text: function(node, vm, exp) {
        //请给我按照解析v-text指令的方式进行解析
        this.bind(node, vm, exp, 'text');
    },
    //v-html指令
    html: function(node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },
    //v-model指令
    model: function(node, vm, exp) {
        this.bind(node, vm, exp, 'model');

        var me = this,
            val = this._getVMVal(vm, exp);
        node.addEventListener('input', function(e) {
            var newValue = e.target.value;
            if (val === newValue) {
                return;
            }

            me._setVMVal(vm, exp, newValue);
            val = newValue;
        });
    },
    //v-class指令
    class: function(node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },

    bind: function(node, vm, exp, dir) {
        //var updaterfn=updater['textUpdater']
        //updaterFn中是一个函数
        var updaterFn = updater[dir + 'Updater'];

        //两件事:
        //1.----通过正则表达式把插值中的msg提取出来,然后去vm的实例对象中找msg这个属性,并且把该值得到,返回
        //调掉方法("{{msg}}",'abd')
        updaterFn && updaterFn(node, this._getVMVal(vm, exp));

        //和最难个一起的
        new Watcher(vm, exp, function(value, oldValue) {
            updaterFn && updaterFn(node, value, oldValue);
        });
    },

    // 事件处理
    eventHandler: function(node, vm, exp, dir) {
        //node--button,vm---vm实例对象,exp---showName,dir----指令:on:click

        //eventType---->click
        var eventType = dir.split(':')[1],
        //vm对象中的methods是否存在.并且找里面对应的showName的方法(根据表达式来查找)
        //fn中存储的是showName方法
            fn = vm.$options.methods && vm.$options.methods[exp];
        //判断click和showName是否存在
        if (eventType && fn) {
            //为按钮绑定事件监听
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },

    _getVMVal: function(vm, exp) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k) {
            val = val[k];
        });
        return val;
    },

    _setVMVal: function(vm, exp, value) {
        var val = vm;
        exp = exp.split('.');
        exp.forEach(function(k, i) {
            // 非最后一个key，更新val的值
            if (i < exp.length - 1) {
                val = val[k];
            } else {
                val[k] = value;
            }
        });
    }
};


var updater = {
    //node---"{{msg}}"----value=====abc
    textUpdater: function(node, value) {
        //{{msg}}----直接被替换成abc
        //<p>{{msg}}</p>======><p>abc</p>
        node.textContent = typeof value == 'undefined' ? '' : value;
    },
    //更新v-html指令的
    htmlUpdater: function(node, value) {
        node.innerHTML = typeof value == 'undefined' ? '' : value;
    },
    //v-class
    classUpdater: function(node, value, oldValue) {
        //如果当前标签里有class="cls1" 此时 v-class="cls2",拿出cls1,后面拼接一个空格+cls2 返回,
        //如果class="",如果html中没有静态的class,说明没有class,但是写了一个v-class="cls2" ,那么最终直接这是class="cls2"
        var className = node.className;
        className = className.replace(oldValue, '').replace(/\s$/, '');

        var space = className && String(value) ? ' ' : '';

        node.className = className + space + value;
    },

    modelUpdater: function(node, value, oldValue) {
        node.value = typeof value == 'undefined' ? '' : value;
    }
};