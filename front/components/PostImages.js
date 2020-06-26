import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './imagesZoom';

const PostImages = ({ images }) => {

    const [showImagesZoom, setShowImagesZoom] = useState(false);

    const onZoom = useCallback(()=>{
        setShowImagesZoom(true);
    }, []);

    const onClose = useCallback(()=> {
        setShowImagesZoom(false);
    },[]);

    // PostCard 에서 이미 0 개 이상일때를 필터링함.
    if(images.length === 1) {
        return (
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
                {/* role="presentation" button, input 이 아닌경우 스크린리더에게 굳이 클릭할 필요 없는 컨텐츠의 경우 알리는 용도 */}
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    if(images.length === 2) {
        return (
            <>
                <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={images[0].src} alt={images[1].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        )
    }
    return(
        <>
            <div>
                <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
                <div
                    role="presentation"
                    style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
                    onClick={onZoom}
                >
                    <PlusOutlined />
                    <br />
                    {images.length - 1} 개의 사진 더보기
                </div>
            </div>
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    )
};

PostImages.propTypes = {
    Images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;