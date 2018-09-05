<template>
    <div class="upload">
        <input @change="_fileChange($event)" type="file" :multiple="supportMore ? 'multiple' : false" ref="upload" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: []     //用来存储转换base64完成后的src对象
        }
    },
    props: {
        supportMore: {      //是否支持多图上传及预览
            type: Boolean,
            default: false
        }
    },
    methods: {
        _fileChange(e) {     //file上传文件变化的回调函数
            if (!e.target.files[0].size) return    //没有文件，返回

            this._handleFiles(e.target.files)  //批量处理图片

            e.target.value = ""        //清空file值，便于继续上传另一张图片
            this.$emit("getImg", this.imgList)
        },

        _handleFiles(files) {        //图片文件逐个批量导入专门的处理方法
            for (let i = 0; i < files.length; i ++) {
                this._fileAdd(files[i])
            }
        },

        _fileAdd(file) {        //单个图片处理
            var _this = this

            this.size = this.size + file.size       //传入图片的总大小
            let reader = new FileReader()   //创建读取文件的H5对象
            reader.vue = this
            reader.readAsDataURL(file)  //将图片转成base64格式
            reader.onload = function() {
                file.src = this.result      //this指reader对象，result属性是转成的base64编码

                //是否支持多图判定
                _this.supportMore ? this.vue.imgList.push({file}) : this.vue.imgList[0] = {file}
                console.log(this.vue.imgList[0])
            }
        }
    }
}
</script>
<style lang="less" scoped>
.upload {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 200;
    input {
        width: 100%;
        height: 100%;
    }
}
</style>

