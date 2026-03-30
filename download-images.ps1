$urls = @(
    "https://u-move.com.au/wp-content/uploads/2025/08/U-Move-logo-copy.png",
    "https://u-move.com.au/wp-content/uploads/2025/08/U-Move-logo-WHITE.png",
    "https://u-move.com.au/wp-content/uploads/2025/08/General-Purpose-Containers-1.png",
    "https://u-move.com.au/wp-content/uploads/2025/08/Shipping-container-storage-at-home-1024x538.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Mining_and_operations_cover_image-scaled-1-768x1024.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/U-Move-Storage-Container-Outside-House.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/IMG_1486-1024x565.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/IMG_2081-768x1024.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/rigging-container-scaled-1-768x1024.jpeg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Crib-room-scaled-1-768x1024.jpeg",
    "https://u-move.com.au/wp-content/uploads/2025/01/shipping-containers-pros-cons.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/20ft-Standard-Tall.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Qualiity_containers_to_buy-scaled-1-768x1024.jpg",
    "https://u-move.com.au/wp-content/uploads/2024/07/Easy-Open-Door-Handle-Close.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/IMG_2064_2-768x1024.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/12/10ft-1024x1024.png",
    "https://u-move.com.au/wp-content/uploads/2025/12/20ft-1024x1024.png",
    "https://u-move.com.au/wp-content/uploads/2025/12/40ft-1024x1024.png",
    "https://u-move.com.au/wp-content/uploads/2025/08/IMG_7419-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/IMG_2795-1024x736.png",
    "https://u-move.com.au/wp-content/uploads/2025/08/Mods-3566-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Used-40ft-scaled-1-1024x768.jpeg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Various-20ft-New-Build-Containers-min.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/unnamed-6-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Modified-Containers-Perth-Transported-Lube-Rooms--1024x689.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Work-Shop-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/July-14-008-Inside-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/20ft-Aublution-0011-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Hydration-Station-1024x768.jpeg",
    "https://u-move.com.au/wp-content/uploads/2025/08/shipping-container-cafe-designs.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/conversions-tailored-to-your-business-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Black-Box-Shipping-Container-Home-exterior-1024x572.jpeg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Mods-3568-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/container-cafes-get-started-with-u-move.jpeg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Craig-0816-018-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Storage-1024x768.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/classic_car.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/11/What-Can-You-Fit-in-a-20ft-Container-scaled.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/11/How-Container-Storage-Can-Save-Businesses-Thousands-on-Warehousing-scaled.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/12/Long-Term-vs-Short-Term-Storage-scaled.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/11/no-people-living-room-interior-move-with-carton-boxes-empty-real-estate-property-full-cardboard-packing-storage-cargo-nobody-apartment-relocation-moving-day-scaled.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/11/full-shot-man-carrying-pallet-truck-scaled.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/11/family-unpacking-boxes-with-new-furniture-scaled.jpg",
    "https://u-move.com.au/wp-content/uploads/2025/08/Craig-0816-018.jpg",
    "https://u-move.com.au/wp-content/uploads/2021/11/shipping-container-outside-perth-home.jpg",
    "https://u-move.com.au/wp-content/uploads/2018/07/Screen-Shot-2018-07-19-at-4.38.29-pm.jpg"
)

$outDir = "C:\Users\useco\Projects\u-move\scraped-images"
$count = 0
foreach ($url in $urls) {
    $filename = [System.IO.Path]::GetFileName($url)
    $outPath = Join-Path $outDir $filename
    try {
        Invoke-WebRequest -Uri $url -OutFile $outPath -UseBasicParsing
        $count++
        Write-Host "OK: $filename"
    } catch {
        Write-Host "FAIL: $filename - $($_.Exception.Message)"
    }
}
Write-Host "`nDownloaded $count / $($urls.Count) images"
