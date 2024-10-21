import Cards from "./components/project"
const style = {
    grid:{
        display:grid,
        gridTemplateColumns: 'fr fr',
        gridTemplateRow: 'fr fr',
    }
}
function projectgrid(){
    return (
        <>
            <div style={style.grid}>
                <div>{Cards(`https://media.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Frd6ggkcsa9blubtu6bz6.png`) }</div>

            </div>
        </>
    )

}


export default projectgrid