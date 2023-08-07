import axios from "axios";

export default function () {
    
    const url = "http://localhost:3333/students/" 
    const studentData = ref([]) 
    const error = ref(null) 
    const statusCode = ref(null) 
    const delError = ref(null) 
    const getAllStudents = async () => {
        studentData.value = [] 
        error.value = null 
        try {
            const res = await axios(url) 
            studentData.value = res.data
        }
        catch(err) {
            error.value = err
        }
    }

    const singleStudent = async (id) => {
        studentData.value = [] 
        error.value = null 
        try {
            const res = await axios(url + id) 
            studentData.value = res.data
        }
        catch(err) {
            error.value = err
        }
    }

    const createStudent = async (Fdata) => {
        studentData.value = [] 
        error.value = null 
        try {
            const options = {
                url : url, 
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: Fdata
            }
            const res = await axios(options)
            studentData.value = res.data 
            statusCode.value = res.status
        }
        catch (err) {
            error.value = err
        }
    }

    const updateStudent = async (id, Fdata) => {
        studentData.value = [] 
        error.value = null 
        try {
            const options = {
                url : url + id, 
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: Fdata
            }
            const res = await axios(options)
            studentData.value = res.data 
            statusCode.value = res.status
        }
        catch (err) {
            error.value = err
        }
    }

    const deleteStudent = async (id, Fdata) => {
        studentData.value = [] 
        error.value = null 
        try {
            const options = {
                url : url + id, 
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const res = await axios(options)
            statusCode.value = res.status
        }
        catch (err) {
            delError.value = err
        }
    }

    return {
        studentData, error, statusCode, delError, getAllStudents,singleStudent, createStudent, updateStudent, deleteStudent
    }


}