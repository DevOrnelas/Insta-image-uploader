import React, {useState} from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {

    const [error, setError] = useState(null)
    const [file, setFile] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {

        let selected = e.target.files[0]

        if(selected && types.includes(selected.type)){
            setFile(selected)
            setError('')
        } else {
            setFile(null)
            setError('Please Select an image file (png or jpeg)')
        }
    }

    return (
        <form>
            <input type="file" onChange ={changeHandler} />
            <div className="output">
                {file && <div>{ file.name } </div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
                {error && <div className="error">{error} </div>}
            </div>
        </form>
    )
}

export default UploadForm