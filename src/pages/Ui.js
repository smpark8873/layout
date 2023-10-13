


function Profile() {
    return (
        <img src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2021/04/urbanbrush-20210409171013216893.jpg" alt="" style={{margin: '5px', width:'100px'}} />
    );
}

export default function Ui() {
    return (
        <section className='warp'>
            <h1>Amazing scientiste</h1>
            <Profile />
            <Profile />
            <Profile />            
        </section>
    );
}