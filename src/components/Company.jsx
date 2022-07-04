import { CardContent, Typography, CardActionArea, Skeleton } from '@mui/material'
import { useState } from 'react'
import { CompanyCard, CardHead, OpenLockIcon, CloseLockIcon, CompanyCardLocked, CardTitle, Ellipsis, DollarIcon } from '../Helper/styles'


const Company = ({ company, isLoading }) => {
    const [lock, setLock] = useState(true)

    const lockClicked = () => {
        if(lock == true) {
            setLock(false)
        } else {
            setLock(true)
        }
    }
    //console.log('company', company)
    let content = <>
                    {isLoading ? 
                        <CardHead action={
                            lock ? 
                                <OpenLockIcon onClick={lockClicked} /> 
                                : 
                                <CloseLockIcon onClick={lockClicked} />
                            } 
                            title={<CardTitle variant="h2">{company.comp_local_name}</CardTitle>} /> 
                        : 
                        <Skeleton variant='rectangle' animation='wave' width={345} height={70} /> 
                    }
                    <CardContent>
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2">{company.comp_local_name}</Ellipsis>
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} sx={{ mb: 1 }} />
                        }
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2">{company.country}</Ellipsis>
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} sx={{ mb: 1 }} />
                        }
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2">{company.cmpy_opst}</Ellipsis>
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} sx={{ mb: 1 }} />
                        }
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2" dangerouslySetInnerHTML={ {__html: company.cmpy_empl_num} } />
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} sx={{ mb: 1 }} />
                        }
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2">{company.cmpy_lstd}</Ellipsis>
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} sx={{ mb: 1 }} />
                        }
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2">{company.cmpy_opst}</Ellipsis>
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} sx={{ mb: 1 }} />
                        }
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2"><DollarIcon />{company.cmpy}</Ellipsis>
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} sx={{ mb: 1 }} />
                        }
                        {isLoading ? 
                            <Ellipsis gutterBottom variant="body2">
                                <DollarIcon />{company?.close_price ? company.close_price : '...'}
                            </Ellipsis>
                            : 
                            <Skeleton variant='rectangle' animation='wave' width={210} height={20} />
                        }
                    </CardContent>
                </>

    return (
        <>
            {lock ? <CompanyCard>{content}</CompanyCard> : <CompanyCardLocked>{content}</CompanyCardLocked>}
        </>
    )
}

export default Company