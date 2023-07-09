import '../components/Formstyle.css'
const Form=()=>{
    return(
        <div className='form'>
            <form>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='email'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Message</label>
                <textarea rows={6} placeholder='type a message'/>
               <button className='btn'>Submit</button>
            </form>
        </div>
    )
}
export default Form