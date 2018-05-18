import * as React from 'react'

export interface IProps  {
    /** Hex color code that box will display */
    color: string;
    
    /**
     * Optional text that the box will display
     * 
     * @default no text was supplied :(
     */
    text?: string;
} 

const ColorBox =  (props: IProps) => {

    const style = {
        backgroundColor: `${props.color}`,
        height: '100px',
        width: '100px'
    }

  return (
    <div style={ style }>
      {props.text || ''}
    </div>
  )
}

export default ColorBox; 