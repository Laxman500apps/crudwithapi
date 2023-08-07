<script setup>

const {studentData, getAllStudents, deleteStudent} = studentapi()
onMounted(() => {
    getAllStudents()
})
console.log(studentData);
const delStudent = async (id) => {
    alert("Are you sure you want to delete?")
    await deleteStudent(id)
    await getAllStudents()
}
</script>

<template>
    <div class="container">
        <div>
            <h1 class="heading">CRUD with api</h1>
        </div>
        <div >  
            <div class="list">
                <h3>
                    Students List
                </h3> 
                <button @click="navigateTo('/add')">Add</button>
            </div>
            <div>
                <table>
                      <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>  
                            <th>Actions</th>
                        </tr>
                      </thead> 
                      <tbody>
                        <tr v-for="{id,stuname, email } in studentData" :key="id">
                            <td>{{ stuname }}</td>
                            <td>{{ email }}</td>
                            <td>
                                <button @click="navigateTo(`view/${id}`)">View</button>
                                <button @click="navigateTo(`edit/${id}`)">Edit</button>
                                <button @click="delStudent(id)">Delete</button>
                            </td>
                        </tr>
                      </tbody>                 
                </table>
            </div>

        </div>
    </div>
</template>

<style scoped>
   button {
        border-radius: 2px;
        border: none;
        cursor: pointer;
        padding: 4px;
        margin-right: 10px;
    }

    button:hover {
        background-color: #000; 
        color: #fff;
    }

    .container {
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center;
    }
    .list {
        display: flex; 
        justify-content: space-around;
    }
    .heading {
        font-family: "Roboto"; 
        font-size: 22px; 
        font-weight: bold;
        text-decoration: underline  ;
    }
    table {
        width: 500px;
    }

    th {
        text-decoration: underline;
        text-align: center;
    }
    td {
        text-align: center;
    }

</style>