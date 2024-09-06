<template>
    <Header />
    <div class="page-content">
        <div class="form-v5-content">
            <form class="form-detail" action="#" method="post">

                <h2 style="color:black">ADD RESTAURANT</h2>
                <div class="form-row">
                    <label for="full-name">R-NAME</label>
                    <input type="text" v-model="restaurance.name" id="" class="input-text" placeholder="R-NAME" required>
                    <i class="fas fa-user"></i>
                </div>
                <div class="form-row">
                    <label for="your-email">R-ADDRESS</label>
                    <input type="text" v-model="restaurance.address" id="" class="input-text" placeholder="R-ADDRESS"
                        >
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="form-row">
                    <label for="password">R-CONTACT</label>
                    <input type="password" v-model="restaurance.contact" id="" class="input-text" placeholder="R-CONATCT"
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
import axios from 'axios'
import Header from './AppHeader.vue'
export default {
    name: 'AddItem',
    data() {
        return {
            name: "",
            restaurance: {
                name: "",
                contact: '',
                address: ''
            }

        }
    },
    methods: {
       async addrestaurance() {
            let result =await axios.post("http://localhost:3000/rest",{
                name:this.restaurance.name,
                contact:this.restaurance.contact,
                address:this.restaurance.address,
            });
            if(result.status==201){
                this.$router.push({name:'HomePage'});
            }
        }
    },
    catch(error){
       console.error("error is",error);
    },
    components: {
        Header
    },
    mounted() {
        let user = localStorage.getItem('userinfo');
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'SignUp' });
        }
    }
}
</script>