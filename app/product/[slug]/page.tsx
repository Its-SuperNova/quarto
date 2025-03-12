"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronDown,
  Heart,
  Star,
  Truck,
  Package,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { allProducts, relatedProducts } from "@/data/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts[params.slug as keyof typeof allProducts];

  const [mainImage, setMainImage] = useState(product?.images[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  // If product not found, show a fallback
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className="container max-w-[1300px] mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronLeft className="h-4 w-4 rotate-180" />
            <span>Product details</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg overflow-hidden">
                <Image
                  src={mainImage || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 py-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      mainImage === image
                        ? "bg-black w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 overflow-hidden rounded-lg border-2 ${
                      mainImage === image
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      width={120}
                      height={120}
                      className="aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-2xl font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Order in 03:30:35 to get next day delivery</span>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <h3 className="font-medium">Select Size</h3>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex gap-2"
                >
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-sm font-medium peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white hover:border-gray-400"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3">
                <Button className="flex-1 h-12 rounded-full bg-black hover:bg-gray-800">
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Description & Fit */}
              <Collapsible
                open={isDescriptionOpen}
                onOpenChange={setIsDescriptionOpen}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between py-4 border-t border-gray-200">
                  <span className="font-medium">Description & Fit</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isDescriptionOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.details}
                  </p>
                </CollapsibleContent>
              </Collapsible>

              {/* Shipping */}
              <Collapsible
                open={isShippingOpen}
                onOpenChange={setIsShippingOpen}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between py-4 border-t border-gray-200">
                  <span className="font-medium">Shipping</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isShippingOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="pb-4 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Package className="h-5 w-5" />
                      <div>
                        <p className="font-medium text-sm">Disc 50%</p>
                        <p className="text-xs text-muted-foreground">
                          3-4 Working Days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Truck className="h-5 w-5" />
                      <div>
                        <p className="font-medium text-sm">Regular Package</p>
                        <p className="text-xs text-muted-foreground">
                          10 - 12 October 2024
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Rating & Reviews */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Rating & Reviews</h2>
            <div className="bg-white rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">
                    {product.reviews.average}
                  </div>
                  <div className="text-lg text-muted-foreground mb-4">/ 5</div>
                  <div className="text-sm text-muted-foreground">
                    ({product.reviews.count} New Reviews)
                  </div>
                </div>
                <div className="space-y-2">
                  {product.reviews.distribution.map((item) => (
                    <div key={item.rating} className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {item.rating}
                        </span>
                      </div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Review */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">AM</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Alex Mathio</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        13 Oct 2024
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      "The Aetherium graphic tee is absolutely perfect! The
                      oversized fit is exactly what I was looking for, and the
                      quality of the print is outstanding. The 'THOUGHTS
                      COLLIDE' design really speaks to me. Highly recommend!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* You might also like */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.slug}`}>
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">${product.price}</span>
                        {product.originalPrice && (
                          <>
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                              -
                              {Math.round(
                                ((product.originalPrice - product.price) /
                                  product.originalPrice) *
                                  100
                              )}
                              %
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
