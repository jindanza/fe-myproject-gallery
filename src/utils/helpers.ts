export const handleToken = () => {
    const token = document.cookie.replace('token=', '');
    const headers:any = { 'x-access-token': `Bearer ${token}` }
    return headers
}