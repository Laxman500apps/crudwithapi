<script setup>
   const route = useRoute()
   const {studentData, singleStudent, updateStudent} = studentapi()
   
   onMounted(() => {
        singleStudent(route.params.id)
   })

   const editStudent = () => {
        updateStudent(route.params.id, studentData.value)
        alert("Student Updated successfully")
        navigateTo("/")   
   }

</script>

<template>
    <div>
        <div>
            <h1>Edit Student</h1>
        </div>
        <form @submit.prevent="editStudent" id="editStudentForm">
            <div>
                <label for="name">Id: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
                <input type="text" 
                readonly disabled v-model="studentData.id" />
            </div>
            <div>
                <label for="name">Name: </label>
                <input type="text" v-model.trim="studentData.stuname" />
            </div>
            <div>
                <label for="name">Email: </label>
                <input type="text" v-model.trim="studentData.email" />
            </div> 
            <div>
                <button type="submit">Update</button>
                <button @click="navigateTo('/')">Back</button>
            </div> 
            
        </form>
    </div>
</template>

<style scoped>
    button {
        border-radius: 2px;
        border: none;
        cursor: pointer;
        padding: 4px;
        margin-top: 20px;
        margin-right: 10px;
    }

    button:hover {
        background-color: #000; 
        color: #fff;
    }
</style>