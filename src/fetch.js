export const request = async(url) => {
    try {
        const response = await fetch(url)
        if(response.status !== 200) {
            throw new Error(JSON.stringify({"success": false, "code": response.status, "data": response.statusText}))
        }
        const data = await response.json()
        return data.length === 0 ? {"success": true,"message": "no data"} : {"success": true, "data": data}
    } catch (error) {
        return error
    }
}