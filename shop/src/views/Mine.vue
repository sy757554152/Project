<template>
    <div>
        <van-nav-bar title="我的" class="header"></van-nav-bar>
        <van-tabs>
            <van-tab title="登录">
                <van-cell-group>
                    <van-field v-model="loginUsername" required clearable label="用户名" placeholder="请输入用户名"></van-field>
                    <van-field v-model="loginPassword" type="password" required clearable label="密码" placeholder="请输入密码"></van-field>
                    <van-button type="warning" size="large" @click="loginHandler()">登录</van-button>
                </van-cell-group>
            </van-tab>
            <van-tab title="注册">
                <van-cell-group>
                    <van-field v-model="registUsername" required clearable label="用户名" placeholder="请输入用户名"></van-field>
                    <van-field v-model="registPassword" type="password" required clearable label="密码" placeholder="请输入密码"></van-field>
                    <van-button type="danger" size="large" @click="registHandler()">注册</van-button>
                </van-cell-group>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/service.config.js'
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return{
                loginUsername:'',
                loginPassword:'',
                registUsername:'',
                registPassword:'',
            }
        },
        methods:{
            registHandler(){
                axios({
                    url:url.registUser,
                    method:"post",
                    data:{
                        userName:this.registUsername,
                        password:this.registPassword
                    }
                }).then((res)=>{
                    if(res.data.code==200){
                        console.log(res);
                        this.registUsername='';
                        this.registPassword='';
                        this.$toast.success('注册成功');
                    }
                    else{
                        this.registUsername='';
                        this.registPassword='';
                        this.$toast.fail('注册失败');
                    }
                }).catch(()=>{
                    this.registUsername='';
                    this.registPassword='';
                    this.$toast.fail('注册失败');
                })
            },
            loginHandler(){
                axios({
                    url:url.loginUser,
                    method:"post",
                    data:{
                        userName:this.loginUsername,
                        password:this.loginPassword
                    }
                }).then((res)=>{
                    console.log(res);
                    if(res.data.code==200){
                        new Promise((resolve)=>{
                            setTimeout(()=>{
                                resolve();
                            },1000)
                        }).then(()=>{
                            this.$toast.success('登陆成功');
                            this.loginInfo([this.loginUsername,'/'+this.loginUsername]);
                            this.changeLogin(true);
                            this.loginPassword="";
                            this.loginUsername="";
                            console.log(this.loginflag);
                            this.loginflag=!this.loginflag;
                            this.$router.go(-1);
                        }).catch(err=>{
                            this.$toast.fail('保持登录状态失败');
                            console.log(err);
                        })
                    }
                }).catch(err=>{
                    this.$toast.fail('登录失败');
                    console.log(err);
                })
            },
            ...mapMutations(['loginInfo','changeLogin'])
        }
    }
</script>

<style lang="scss" scoped>

</style>