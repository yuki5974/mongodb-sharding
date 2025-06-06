rs.initiate({
    _id: "rs1",
    members: [
      // コンテナの hostname と port を指定
      // priority は優先順位を決める値（任意）
      { _id: 0, host: "host.docker.internal:10001", priority: 100 },
      { _id: 1, host: "host.docker.internal:10002", priority: 10 },
      { _id: 2, host: "host.docker.internal:10003", priority: 10 },
    ],
  });