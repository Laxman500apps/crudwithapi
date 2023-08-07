<script setup>
const route = useRoute()
const {studentData, error, statusCode, singleStudent} = studentapi()
onMounted(() => {
    singleStudent(route.params.id)
})
</script>

<template>
    <div>
        <div >
            <div class="list">
                <h3>
                    Student List
                </h3> 
            </div>
            <div>
                <table>
                      <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>  
                        </tr>
                      </thead> 
                      <tbody>
                        <tr>
                            <td>{{ studentData.id }}</td>
                            <td>{{ studentData.stuname }}</td>
                            <td>{{ studentData.email }}</td>
                        </tr>
                      </tbody>                 
                </table>
                 <button @click="navigateTo('/')">Back</button>
            </div>

        </div>
    </div>
</template>

<style scoped>
    th {
        text-decoration: underline;
    }

    button {
        margin-top: 20px;
        border-radius: 2px;
        border: none;
        cursor: pointer;
    }

    button:hover {
        background-color: #000; 
        color: #fff;
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