import React, { useState } from 'react'
import { ImageOff } from 'lucide-react'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  if (didError) {
    return (
      <div
        className={`relative flex w-full h-full items-center justify-center overflow-hidden rounded-2xl glass-card ${className?.replace(/\b(object-\S+|transition-\S+|rounded-\S+)\b/g, '') ?? ''}`}
        style={style}
        title={src ? `Failed to load image: ${src}` : 'Image failed to load'}
      >
        <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
          <ImageOff className="w-12 h-12 text-white/90" />
          <span className="text-xs font-medium tracking-wider text-white/80">No image</span>
        </div>
      </div>
    )
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
      {...rest} 
      onError={handleError} 
    />
  )
}
