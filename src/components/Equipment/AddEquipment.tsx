import { ChangeEvent, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { EquipmentContext } from '../../contexts/EquipmentContext';
import IEquipmentContext from '../../interfaces/IEquipmentContext';
import ImageUploadService from '../../services/ImageUploadService';

const AddEquipment = () => {

    const [nameOfEquipment, setName] = useState<string>("")
    const [description, setDesc] = useState<string>("")
    const [usedByCharacter, setUsedByCharacter] = useState<string>("")
    const [nameOfImage, setNameOfImage] = useState<string>("")
    const [image, setIamge] = useState<File | null>(null)

    const {addNewEquipment} = useContext(EquipmentContext) as IEquipmentContext

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value } = e.currentTarget;

        switch( name ){
            case "nameOfEquipment":
                setName( value )
            break;
            case "description":
                setDesc( value )
            break;
            case "usedByCharacter":
                setUsedByCharacter ( value )
            break;
        }
    }

    const imageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {files} =e.target;

        if(files !=null) {
            const file= files[0]
            setIamge(file)
            setNameOfImage(file.name)
        }
    }

    const uploadImage = () => {
        if( image != null){
            ImageUploadService.uploadImage(image);
        }
    }

    const addEquipment = () => {

        const newEquipment = {
            nameOfEquipment: nameOfEquipment,
            description: description,
            usedByCharacter: usedByCharacter,
            image: nameOfImage
        }
        addNewEquipment(newEquipment)
    }

    return (

        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="nameOfEquipment" value={nameOfEquipment}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="description" value={description} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>The Character that uses this</Form.Label>
                <Form.Control onChange={changeHandler} type="text" name="usedByCharacter" value={usedByCharacter} />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" name='image' onChange={imageHandler} />
                        <Button className="mt-2" variant="warning" onClick={uploadImage}>
                        Upload Image
                        </Button>
                        <br></br>
                        <i>*Upload the image before submitting</i>
            </Form.Group>

            <Button variant="success" onClick={addEquipment}>
                        Add Equipment!
                    </Button>

        </Form>

    )
}

export default AddEquipment;