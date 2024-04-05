export const Logo=(props)=>{
    const style = {
        fontSize: props.logoSize || '2.5rem',
      };

    return(
        <>
            <span style={style} className='logo'>
                <div className='logo__sqr1'></div>
                <div className='logo__sqr2'>
                    <span className='logo__main'>
                        <div className='logo__icon'>&lt;/&gt;</div>
                        <div className='logo__name-pixel'>Pixel</div>
                        <div className='logo__name-crafter'>Crafter.eu</div>
                    </span>
                    </div>
                    <div className='logo__sqr3'></div>
            </span>
        </>
    )
}