

export default function Container({imageurl, text, tot, sport}) {
    return (
        <div className='container'>
        <img className="imagestyle" src={imageurl}></img>
        <p className="txt">{text}</p>
        <div className='sub'>
            <span className='subtext'>
                <p className="event">Total Events</p>
                <p>{tot}</p>
            </span>
            <span className='subtext'>
                <p className="event">Sport</p>
                <p>{sport}</p>
            </span>
        </div>
    </div>
      
    );
  }
  