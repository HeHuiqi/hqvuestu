<template>
    <div>
        <h1>{{ count }}</h1>
        <h1>{{ count2 }}</h1>
        <button v-on:click="addOne">+1</button>

        <div>
            <div>
                <input type="number" placeholder="输入一个数字" v-model="inputNumber" />
                <p>您的输入是：{{ inputNumber }}</p>
            </div>
            <button v-on:click="addNumber">Add Num</button>
        </div>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('account')

export default {
    name: "HqStoreModuleUse",
    data() {
        return {
            inputNumber: ''
        }
    },
    computed: {
        ...mapState({
            count: 'count'
        }),
        count2: function () {
            return this.$store.state.account.count
        }
    },
    methods: {
        addOne: function () {
            //type 格式 
            // 模块名/mutaion_name或action_name
            // 如果有子模块
            // 则 模块名/子模块名/mutaion_name或action_name
            let commit = {
                type: 'account/increment',
            }
            // console.log(this.$store)
            this.$store.commit(commit)
        },
        addNumber: function () {
            if (this.inputNumber != '') {

                let action = {
                    type: 'account/incrementNumber',
                    amount: parseInt(this.inputNumber),
                }
                // console.log(this.$store)
                this.$store.dispatch(action)
            } else {
                alert('请输入数字')
            }

        }
    }
}
</script>