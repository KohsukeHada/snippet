// 先頭一文字のみを表示するが、特定文字の場合真ん中の文字１文字を表示
// 例
// 道路
// 河川
// 建物：鉄筋
// 建物：木造
// 土地：公共値
// 土地：私有地
if (left($feature.Notes,1) == '建') {
    mid($feature.field_11,4,1)
} else if (left($feature.Notes,1) == '土') {
     mid($feature.Notes,4,1)  
} else {
    left($feature.Notes,1)
}
