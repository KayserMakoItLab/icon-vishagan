import { useRouter } from "next/router";

const Alert = ({ text, closeAlert }) => {

    const router = useRouter();

    const handleCloseClick = () => {
        router.push({
            pathname: '/dashboard',
            query:{
                exit:true
            }
        })
        closeAlert(false)
    }

    return <div className="alert-container">
        <div className="alert-box">
            <div className="alert-content">
                <p style={{display:'flex',justifyContent:'center', fontSize:'16px'}}>{text}</p>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    <button className="secondary-btn" onClick={handleCloseClick}>Proceed</button>
                    <button className="primary-btn" onClick={() => closeAlert(false)}>Cancel</button>
                </div>
                
            </div>
        </div>
        
    </div>
}

export default Alert;