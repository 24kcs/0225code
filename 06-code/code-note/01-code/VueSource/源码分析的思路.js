/*


 界面显示之前
数据代理: proxyData()方法
通过上面的方法实现数据代理,目的是为了方便vm可以直接调用data中的属性
数据的劫持:Observer
劫持后,里面把data中所有的属性遍历,并且为每个属性添加一个dep对象,对应depId的值,及添加一个subs数组(订阅器)
一个属性对应一个dep
开始模版解析Compile
解析的过程:先根据el获取当前对应的容器(div#app),把当前的容器中所有的节点全部的加入到文档碎片对象中
开始执行init()方法,在该方法的内部,获取文档对象里面所有的节点,进行遍历,在遍历的过程中,判断当前的节点是不是标签,是不是文本,当前的节点里面是否还有子节点
1.如果当前的节点是标签:
则获取该节点的所有的属性,判断该属性是不是指令属性,而且还要判断,指令是不是事件指令,或者是不是普通指定

1.1如果是事件指令:
把当前的事件指令的v-去掉,还要获取里面的on:click="showName"click，及对应的showName表达式,然后通过vm找到methods中对应的showName方法,再通过addEventListener为当前的标签绑定click事件,并且把showName也绑定到click事件中
1.2如果是普通指令:
判断当前的普通指令是什么指令(v-text,v-html,v-class)根据对应的指令去updater中找对应的方法,开始更新(把v-text的指令,使用标签的textContent属性进行值的替换,把v-html指令使用标签的innerHTML属性进行值的替换,把v-class指令使用的是className属性进行替换),最终把页面中标签里之前所写的vue的指令全部删除(删除标签中所有的属性)

2.如果当前的节点是文本,并且复合插值的正则表达式:
找到upater中对应的textUpdater方法,对标签的textContent属性进行值的替换

100-以上所有的操作,都会直接或者间接的调用bind方法,并且在bind方法内部,new Watcher对象,传入对应的回调函数(该回调函数会在更新表达式的值,或者替换值的时候才调用----都会找到对应的updater对象中对应的方法进行更新)

watcher中
进来后,重写属性的get方法的操作,当属性的值获取的时候,就会自动的调用get方法,在内部,使用Dep.target=this这个操作,把当前的watcher对象,添加到Dep对象的subs数组中,并且会直接回到addDep(该方法是watcher中的方法),把对应的dep添加到对应的watcher对象的depIds对象中{0:dep,1:dep}(添加之前新判断当前的watcher对象的depIds中是否存在dep),此时dep和watcher形成关系(添加watcher的这个操作,属于添加消息订阅)
模版解析后,此时dep和watcher关系已经全部建立了
一个属性对应一个dep---depId----subs数组
一个表达式对应一个watcher---depIds
如果页面中有一个属性,表达式也有一个,此时是:1对1的关系
如果页面中有多个属性,表达式只有一个,此时是:多对1的关系
如果页面中有一个属性,表达式有多个,此时是:1对多的关系
如果页面中有多个属性,表达式也有多个,此时是:多对多的关系

以上:-------模版解析结束做的事情
如果在界面中对属性进行修改或者是更新操作,此时直接进入到劫持对象找修改的是哪个属性,就会找对应的dep,该dep对象直接回通过notify()方法找到当前该dep中的subs数组直接遍历里面所有的watcher对象(消息发布),watcher此时接到更新的消息后,先和自己的depIds中的depid值及发布消息的dep的id值做对比,如果能够对应上,此时开始调用update()方法,内部调用run方法,内部调用的是对应的回调函数(在100-的时候传入的回调函数)开始找compile中的updater对象中及对应的更新数据的方法,开始更新,更新后,此时界面发生变化

双向数据绑定: 劫持是有的,模版解析也是有,在判断当前标签中属性是不是指令之后,还要判断当前的属性是不是v-model属性,如果是则调用当前的model相关的方法,为当前的标签通过addEventListener添加input事件,并且绑定对应的methods中的方法
如果页面发生变化(数据改变了)就会直接找updater中对应的model中的方法进行更新数据,同时开始调用绑定的事件的回调函数,把对应的其他的标签(p中用到了v-model中的表达式---<input type="text" v-model="msg"><p>{{msg}}</p>)中的插值也会进行替换
 
 */