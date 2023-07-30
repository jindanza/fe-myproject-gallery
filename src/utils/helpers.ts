export const handleToken = () => {
    const token = document.cookie
    const headers:any = { 'x-access-token': `Bearer ${token}` }
    return headers
}