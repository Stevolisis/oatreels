
export default function Form(){
    function handleSubmit(e:any){
        e.preventDefault();
        
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input/>
                <input/>
                <button>Test Api</button>
            </form>
        </>
    )
}