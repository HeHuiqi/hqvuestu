<template>
    <div>
        <h1>全局属性： {{ count }}</h1>
        <h2> 全局属性： {{ userName }}</h2>
        <h1>全局属性和本地属性结合：{{ newCount }}</h1>
        <h3> 本地属性：{{ localCount }}</h3>
        <h3> 本地计算属性：{{ localName }}</h3>

        <div>
            <button v-on:click="addOne">Count + 1</button>
            <button v-on:click="addFive">Count + 5</button>
            <p></p>
        </div>

        <div>
            <input type="number" placeholder="输入一个数字" v-model="inputNumber" />
            <p>您的输入是：{{ inputNumber }}</p>
            <button v-on:click="addNumber">Count + addNumber</button>

            <div>
                <div>
                    <p v-if="this.isLoading"> 全局loading 正在处理数据。。。</p>
                    <button v-on:click="addNumber2">Dispatch + addNumber</button>
                </div>
                <div>
                    <p v-if="this.loacalIsLoading"> 局部loading 正在处理数据。。。</p>
                    <button v-on:click="addNumber3">Dispatch + addNumber2</button>
                </div>
            </div>

        </div>



    </div>
</template>
<script>
import { mapState } from 'vuex'
import { mutation_type_increment, mutation_type_incrementFive, mutation_type_incrementNumber} from '@/store/mutations'
import { action_type_incrementNumber,action_type_incrementNumber_async } from '@/store/actions'


export default {
    name: 'HqStoreUse',

    data() {
        return {
            localCount: 10,
            inputNumber: '',
            loacalIsLoading:false
        }
    },

    // 
    // 每当 $store.state.count 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。

    // computed: {
    //     count: function() {
    //         //获取状态值
    //         return this.$store.state.count
    //     },
    //     userName(){
    //         return this.$store.state.userName
    //     }
    // },


    computed: {

        //通过 mapState（） 将多个状态值统一起来
        ...mapState({
            count: 'count', // 映射 this.count 为 $store.state.count 的值
            userName: 'userName', // 映射 this.userName 为 $store.state.userName 的值
            isLoading: 'isLoading', // 映射 this.isLoading 为 $store.state.isLoading 的值
            //结合组件自身状态和全局状态
            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            newCount: function (state) {
                return this.localCount + state.count
            }
        }),
        //自身组件的计算属性
        localName: function () {
            return this.userName + '-' + this.count
        },
        


    },

    methods: {
        addOne: function () {
            // 提交 mutation 触发状态改变
            this.$store.commit(mutation_type_increment)
            // this.$store.dispatch('increment')
        },
        addFive() {
            this.$store.commit(mutation_type_incrementFive)
        },
        addNumber() {

            // 提交 mutation 触发状态改变 并传递数据
            // let payload = {
            //     amount:parseInt(this.inputNumber),
            // }
            // this.$store.commit('incrementNumber',payload)

            //统一提交操作和数据，推荐
            if (this.inputNumber != '') {
                let commit = {
                    type: mutation_type_incrementNumber,
                    amount: parseInt(this.inputNumber),
                }
                this.$store.commit(commit)
            } else {
                alert('请输入数字')
            }


        },
        addNumber2() {
            
            //统一提交操作和数据，推荐
            if (this.inputNumber != '') {
                let aciton = {
                    type: action_type_incrementNumber,
                    amount: parseInt(this.inputNumber),
                }
                this.$store.dispatch(aciton)
            } else {
                alert('请输入数字')
            }
        },
        addNumber3() {
            
            //统一提交操作和数据，推荐
            if (this.inputNumber != '') {
                let aciton = {
                    type: action_type_incrementNumber_async,
                    amount: parseInt(this.inputNumber),
                }                
                this.loacalIsLoading = true
                this.$store.dispatch(aciton).then(()=>{
                    this.loacalIsLoading = false
                })
            } else {
                alert('请输入数字')
            }
        }
    }
}
</script>
<style scoped></style>