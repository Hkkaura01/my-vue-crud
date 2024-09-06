<template>
 
    <div class="topnav" id="myTopnav">
      <router-link to="/" class="active" style="color:black">Home</router-link>
      <router-link to="/Add" style="color:black">Add User</router-link>
      <router-link to="/Update" style="color:black">Update User</router-link>
      <a v-on:click="Logout" href="#about" style="color:black">Logout</a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    
  
    
    
        </template>
        
        <script>
    
        export default {
            name:'AppHeader',
            data(){
                return{
                    name:'',
                    
                }
            },
            methods:{
              
                Logout(){
                    localStorage.clear('userinfo');
                
                    this.$router.push({name:'Login'})
                },
               
            }
        }
        </script>
      <style>
      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }
      #pp{
        color:#ddd;
        font-size: 20px;
        font-style: italic;
        float:initial;
      }
      .topnav {
        overflow: hidden;
        background-color: white;
      }
      
      .topnav a {
        float: left;
        display: block;
        color: #29070728;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
      
      .topnav a:hover {
        background-color: #acbbeca9;
        color: rgba(231, 148, 148, 0.781);
      }
      
      .topnav a.active {
        background-color: #48a2ec;
        color: rgba(7, 2, 2, 0.774);
      }
      
      .topnav .icon {
        display: none;
      }
      
      @media screen and (max-width: 600px) {
        .topnav a:not(:first-child) {display: none;}
        .topnav a.icon {
          float: right;
          display: block;
        }
      }
      
      @media screen and (max-width: 600px) {
        .topnav.responsive {position: relative;}
        .topnav.responsive .icon {
          position: absolute;
          right: 0;
          top: 0;
        }
        .topnav.responsive a {
          float: none;
          display: block;
          text-align: left;
        }
      }
      </style>