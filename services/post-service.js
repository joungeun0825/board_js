async function writePost(collection, post) {
    // 생성일시와 조회수를 넣어줍니다.
    post.hits = 0;
    post.createdDt = new Date().toISOString();
    return await collection.insertOne(post); // 몽고디비에 post를 저장 후 결과 반환
}

module.exports = {
    writePost,
}