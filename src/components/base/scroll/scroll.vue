<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>
<script>
//Better-scroll组件
	import BScroll from 'better-scroll'
	export default {
		props:{
			probeType: {
				type: Number,
				default: 1 
			},
			click: {
				type: Boolean,
				default: true
			},
			data: {
				type: Array,
				default: null
			},
			listenScroll: {		//设置scroll要不要监听滚动事件。
				type: Boolean,
				default: false
			},
			pullup: {		//是否需要下拉刷新
				type: Boolean,
				default: false
			},
			beforeScroll: {		//是否监听滑动开始事件，进行一系列的操作
				type: Boolean,
				default: false
			},
			refreshDelay: {		//scroll组件刷新的延时时间
				type: Number,
				default: 20
			}
		},
		mounted(){
			setTimeout(()=>{
				this._initScroll();
			},20);
		},
		methods:{
			_initScroll(){
				if(!this.$refs.wrapper){
					return ;
				}
				this.scroll = new BScroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click: this.click
				});

				//如果需要监听滚动事件
				if (this.listenScroll) {
					let me = this;
					this.scroll.on('scroll', (pos)=> {	//pos一个对象。有x、y轴的滚动值。
						me.$emit('scroll', pos);
					})
				}

				//如果开启了下拉刷新
				if (this.pullup) {
					//监听scroll滑动结束的事件
					this.scroll.on('scrollEnd', ()=> {
						if (this.scroll.y <= this.scroll.maxScrollY + 50) {		//当滚动到底部时
							this.$emit('scrollToEnd')	//派发事件，通知父组件 滚动到底部了
						}
					})
				}

				//是否开启了滑动开始时的监听事件
				if (this.beforeScroll) {
					this.scroll.on('beforeStart', ()=> {
						this.$emit('beforeScroll')	//在滑动前，向外界派发一个事件，表示开始滑动了
					})
				}
			},
			//以下为代理better-scroll的方法
			enable(){
				this.scroll && this.scroll.enable();
			},
			disable(){
				this.scroll && this.scroll.disable();
			},
			refresh(){
				this.scroll && this.scroll.refresh();
			},
			scrollTo() {
				this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);	//查apply的用法
			},
			scrollToElement() {
				this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
			}
		},
		watch: {
			data(){			//当传入的data数据发生变化时，重新刷新better-scroll
				setTimeout(()=>{
					this.refresh();
				}, this.refreshDelay);
			}
		}
	}
</script>
<style scoped lang="less">
	
</style>
