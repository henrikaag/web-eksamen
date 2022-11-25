import axios from "axios";


const ImageUploadService = (

    ()=>{

        const imageUploadEndpoint = "http://localhost:7050/UploadImage";

    
        const uploadImage = async (image: File) => {
            try{
            const formData = new FormData();
            formData.append("file", image);

            const result = await axios({
                url: imageUploadEndpoint,
                method: "POST",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" }
            });

            formData.delete("file"); 
            return result.data;           
        }
        catch
        {
            
        }
        } 


        return {
            uploadImage
        }

    }

)();

export default ImageUploadService;