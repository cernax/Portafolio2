import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Badges() {

    const lazyLoadFromCDN = () => {
        const mathJax = document.createElement('script');
        mathJax.setAttribute('src', 'https://cdn.credly.com/assets/utilities/embed.js');   
        document.head.appendChild(mathJax);
    }

    React.useEffect(() => {
        lazyLoadFromCDN();
    }, [])
    return(
        <div>
            <Typography sx={{ display: 'flex', width:'50%' }} component="span" variant="h4" color="text.primary">                    
                Badges
            </Typography>
            <br/>
            <div className='grid'>
                <div 
                    data-iframe-width="200" 
                    data-iframe-height="270" 
                    data-share-badge-id="bbfdbd5b-120a-42e8-ad28-c1c14af31643" 
                    data-share-badge-host="https://www.credly.com">
                </div>
                <div 
                    data-iframe-width="200" 
                    data-iframe-height="270" 
                    data-share-badge-id="17e5773c-eff3-4db7-b3fc-d576e29ff7f2" 
                    data-share-badge-host="https://www.credly.com">
                </div>
                <div 
                    data-iframe-width="200" 
                    data-iframe-height="270" 
                    data-share-badge-id="51ae87bc-f46b-438c-aafc-46d16ec5cb0b" 
                    data-share-badge-host="https://www.credly.com">
                </div>
            </div>
            <style global jsx>{`
                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    justify-items: stretch;
                    align-items: stretch;
                    column-gap: 20px;
                    row-gap: 20px;
                }
            `}</style>
        </div>
    )
}