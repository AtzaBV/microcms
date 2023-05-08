
export const VideoInformation = () => {
  return (
    <div className="row m-0 mt-4">
        <div className="col-12 col-md-6">
          <iframe className="video-component" src="https://www.youtube.com/embed/4y33h81phKU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-4 pt-2">
              <img className="image-entity" src="http://via.placeholder.com/400x400" alt="" />
            </div>
            <div className="col-12 col-md-4 pt-2">
              <img className="image-entity" src="http://via.placeholder.com/400x400" alt="" />
            </div>
            <div className="col-12 col-md-4 pt-2">
              <img className="image-entity" src="http://via.placeholder.com/400x400" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
