<template>
    <AppHeader/>
    
    <div class="page-content">
        <div class="form-v5-content">
            <form class="form-detail" action="#" method="post">
                <h2>welcome to the Update Userpage </h2>

                <h2 style="color:black">UPDATE RESTAURANT</h2>
                <div class="form-row">
                    <label for="full-name">R-NAME</label>
                    <input type="text" id="rname" class="input-text" placeholder="R-NAME" required>
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-row">
                    <label for="your-email">R-ADDRESS</label>
                    <input type="text" id="raddress" class="input-text" placeholder="R-ADDRESS"
                        >
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="form-row">
                    <label for="password">R-CONTACT</label>
                    <input type="password" id="rcontact" class="input-text" placeholder="R-CONATCT"
                        required>
                    <i class="fas fa-lock"></i>
                </div>

                <div class="form-row-last">
                    <button v-on:click="addrestaurance" type="button"> add res</button>
                </div>
            </form>
        </div>
    </div>

    </template>
    
    <script>
  import AppHeader from './AppHeader.vue'
  import axios from 'axios'
    export default {
        name:'UpdateItem',
        data(){
            return{
                name:''
            }
        },
        components:{
            AppHeader
        },
       async mounted(){
            let user=localStorage.getItem('userinfo');
            this.name=JSON.parse(user).name;
            if (!user){
                this.$router.push({name:'SignUp'});
            }
            const result = await axios.get('http://localhost:3000/rest/');
            console.warn(result)
        },
      

    }
    </script>