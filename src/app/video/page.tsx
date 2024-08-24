import video from "@/data/video";

const VideoPage = () => {    
    const v = video({ lang: "en" });
    return (
        <div className="w-screen h-screen overflow-hidden">            
            <iframe
                src={v.url}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full"
                autoFocus                
            ></iframe>
        </div>
    );
};

export default VideoPage;
