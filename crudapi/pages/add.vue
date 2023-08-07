<script setup>
    const {studentData, error, statusCode, createStudent} = studentapi()
    const formData = reactive({
        stuname : "",
        email : ""
    })

    const addStudent = async () => {
        await createStudent(formData)
        if(statusCode.value === 201) {
            document.getElementById("addStudentForm").reset()
            alert("Student added successfully")
            navigateTo("/")
        }
    }
</script>

<template>
    <div>
        <div>
            <h1>Add Student</h1>
        </div>
        <form @submit.prevent="addStudent" id="addStudentForm">
            <div>
                <label for="name">Name: </label>
                <input type="text" 
                v-model.trim="formData.stuname"
                placeholder="Enter name"
                required>
            </div>
             <div>
                <label for="name">Email: </label>
                <input type="text" 
                v-model.trim="formData.email"
                placeholder="Enter email"
                required>
            </div> 
            <div>
                <button type="submit">Add</button>
                <button @click="navigateTo('/')">Back</button>
            </div> 
            
        </form>
    </div>
</template>

<style scoped>
    button:hover {
        background-color: #000; 
        color: #fff;
    }
</style>