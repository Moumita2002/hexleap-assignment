

export default function Collcont({imageurl, text, address, time, coll}) {
    return (
        <div className='cont'>
        <img className="imagestyle" src={imageurl}></img>
        <p className="txt">{text}</p>
        <p className="time">{time}</p>
        <div className='subcol'>
            <div className='subtext'>
                {address}
            </div>
            <div className="but">
                {coll}
            </div>
        </div>
    </div>
      
    );
  }
  