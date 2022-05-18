import React from 'react'

const Trabajos = ({ titulo, objetos, identificacion }) => {
    return (
        <section className="trabajos mt-5" id={identificacion}>
            <div className="container desc">

                <h5 className="display-4 mb-5 text-center">{titulo}</h5>
                <div className="row">
                    {
                        objetos.map(objeto => {
                            return (
                                <>
                                    <div className="col-lg-6 col-lg-offset-3">
                                        <p><img className="img-responsive w-75" src={objeto.image} alt="" /></p>
                                    </div>
                                    <div className="col-lg-3 ">
                                        <p className='text-dark display-5'>{objeto.title}</p>
                                        <p>
                                            <more className='text-dark'>{objeto.description}<br /><br />                                            </more>
                                            <a href={objeto.archivo} className="btn btn-success">Descargar</a>
                                        </p>

                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Trabajos