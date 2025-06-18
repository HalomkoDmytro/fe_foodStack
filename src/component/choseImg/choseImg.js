import React, {useState} from 'react';

const ChoseImg = ({width='100%', height='200', id, label, onChangeInput, source=null}) => {

    const [imageSrc, setImageSrc] = useState(source);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      if(onChangeInput) {
          setImageSrc(url)
          let img =  new FormData();
          img.append("image", e.target.files[0]);
          onChangeInput(url, id, img);
      }
    }
  };

    const getImg = () => {
        if(imageSrc) {
            return <img src={imageSrc} alt="Preview" style={{ height: '300px' }}/>
        }
        return <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none"
                   width={`${width}`} height={`${height}`} aria-label="Placeholder: Image cap"
                   focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180"
                   style={{"fontSize": "1.125rem", "textAnchor":"middle"}}>
                   <rect width="100%" height="100%" fill="#868e96"></rect>
                   <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
               </svg>
    }


    return (
        <div>
            {label ? (<label for="formFile" className="form-label mt-4">{label}</label>) : ''}
            <input className="form-control"
                accept="image/*"
                type="file"
                id="formFile"
                onChange={handleChange} />

            <div>
                {getImg()}
            </div>
        </div>
    )

}

export default ChoseImg;