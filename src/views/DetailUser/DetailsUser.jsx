import { useEffect, useState } from "react";
import { Button, Col, Row } from "antd"
import useInfoUser from "../../hooks/useInfoUser"
import { useNavigate, useParams } from "react-router-dom";
import iconUser from "../../assets/iconUser.svg"
import CarouselComponent from "../../components/Carousel/Carousel";


const DetailsUser = () => {

    const {infoUser} =  useInfoUser();
     const params = useParams();
     const [idUser, setidUser] = useState([])
     const navigate = useNavigate();



    useEffect(() => {

        const filterUser = infoUser !== undefined &&  infoUser?.items?.filter((user) => user.id === Number(params.id))

        setidUser(filterUser)
    }, [])
    

    const goHome  = () => navigate('/');

  return (
    <Row  style={{display:'flex', justifyContent:'flex-start', alignItems:'center', height:'80vh', width:'100%', margin:10 }} >
        <Col span={4}>
            <CarouselComponent/>
        </Col>
        <Col span={7}>
            <img src={iconUser} alt="imagen de prueba" height={400} width={250} />
        </Col>
        <Col span={7}>
            {idUser?.length > 0 ? idUser.map((user, index) =>{
                return (
                    <div key={index}>
                        <h1>{user.firstName} {user.lastName} </h1>
                        <h3>{user.role} - {user.status} </h3>
                        <h4>{user.email} </h4>
                        <h4>{user.userType} </h4>
                        <Button  onClick={goHome} type="primary" style={{height:'40px', width:'150px'}} >Regresar</Button>
                    </div>
                )
            }):
            <>
            <h1>Usuario no encontrado D: </h1>
            <Button  onClick={goHome} type="primary" style={{height:'40px', width:'150px'}} >Regresar</Button>
            </>
            }
        </Col>
        </Row>
  )
}

export default DetailsUser