import { Images } from '../images/images'

function Cylinders() {



    return (
        <>
        <div className="stile-page">
        <button className="btn">
            <img src={Images.CylRim} className="btn-image" alt="Rim Cylinder"></img>
        Rim Cylinders (#34)
        </button>
        <button className="btn">
            <img src={Images.CylMortise} className="btn-image" alt="Mortise Cylinder"></img>
        Mortise Cylinders <br></br>(41, 42, 43, 44, 45, 46, 48, 50, 52, 54, 56)
        </button>
        <button className="btn">
            <img src={Images.CylSFIC} className="btn-image" alt="SFIC Cylinder"></img>
        SFIC (70-)
        </button>
        <button className="btn">
        <img src={Images.CylLFIC} className="btn-image" alt="LFIC Cylinder"></img>

        LFIC (60-)
        </button>
        <button className="btn">
        <img src={Images.CylDegree} className="btn-image" alt="Degree Cylinder"></img>

        DG1-, DG2- & DG3- Series Mortise Cylinders <br></br>(Degree)
        </button>
        <button className="btn">
        <img src={Images.CylKESOF1} className="btn-image" alt="SFIC Cylinder"></img>

        KESO F1/KESO (Old Style)
        </button>
        </div>
        </>
    )
}

export default Cylinders