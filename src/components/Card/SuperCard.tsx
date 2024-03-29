import React from 'react'
import Image from 'next/image'
import {CardBody, CardContainer, CardItem} from '@/components/Card/Card'
import myPhoto from '@/../public/myPhoto.jpg'

export function ThreeDCardDemo() {
  return (
    <CardContainer>
      <CardBody
        style={{
          backgroundColor: '#F3F4F6',
          position: 'relative',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
          borderWidth: '1px',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '1.5rem',
          padding: '1.5rem',
          width: '400px',
          // maxWidth: '30rem',
          height: '350px',
        }}
      >
        <CardItem
          translateZ="50"
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: '#4B5563',
          }}
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          style={{
            color: '#6B7280',
            fontSize: '0.875rem',
            maxWidth: '20rem',
            marginTop: '0.75rem',
          }}
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem>
          <Image
            src={myPhoto}
            style={{
              height: '15rem',
              width: '100%',
              objectFit: 'cover',
              borderRadius: '1rem',
            }}
            alt="thumbnail"
          />
        </CardItem>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '3.125rem',
          }}
        >
          {/*<CardItem*/}
          {/*  // translateZ={20}*/}
          {/*  as="a"*/}
          {/*  style={{*/}
          {/*    padding: '0.5rem 1rem',*/}
          {/*    borderRadius: '1rem',*/}
          {/*    fontSize: '0.75rem',*/}
          {/*    fontWeight: 'normal',*/}
          {/*    color: '#1E40AF',*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Try now →*/}
          {/*</CardItem>*/}
          {/*<CardItem*/}
          {/*  // translateZ={20}*/}
          {/*  as="button"*/}
          {/*  style={{*/}
          {/*    padding: '0.5rem 1rem',*/}
          {/*    borderRadius: '1rem',*/}
          {/*    backgroundColor: '#000',*/}
          {/*    color: '#fff',*/}
          {/*    fontSize: '0.75rem',*/}
          {/*    fontWeight: 'bold',*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Sign up*/}
          {/*</CardItem>*/}
        </div>
      </CardBody>
    </CardContainer>
  )
}
