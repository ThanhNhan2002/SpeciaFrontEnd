import Button from 'react-bootstrap/Button';

export default (props) => {

    function update_access(){
        props.onStatusUpdate(true)
    }

    return (
        <>
            <p>Please follow the instructions below to set up your Xero access.</p>
            <br/>
            <p>- Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <p>- The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            <p>- There are many variations of passages of Lorem Ipsum available.</p>
            <br/>
            <p>Once you have completed all the steps, please check you access.</p>
            <br/>
            <Button onClick={update_access} style={{padding: '15px 35px', paddingRight: '30px', borderRadius: '50px'}} variant="outline-primary">
                Check my Xero access
             </Button>
        </>
    )
}