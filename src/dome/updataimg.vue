<template>
    <div>
        <label class="btn btn-primary file-chooser">
            Change Picture
            <input type="file" id="file" accept=".jpg, .jpeg, .png" @change="uploadAvatar">
        </label>
        <p @click="avatarbtn">点我上传图片</p>
    </div>
</template>

<script>
    export default {
        name: "updataimg",
        methods:{
            uploadAvatar(e) {
                this.avatar=e.target.files[0]
            },
            avatarbtn(){
                let file =  this.avatar
                let formData = new FormData();
                formData.append('avatar', file);
                let xhr = new XMLHttpRequest();
                xhr.open('POST', 'http://localhost:3000/uploadavatar');
                xhr.onload = function() {
                    console.log(xhr);
                }
                xhr.send(formData);
            }
        }
    }
</script>

<style scoped>

</style>
