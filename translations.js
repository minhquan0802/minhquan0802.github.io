const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    header: {
      resume: "Resume",
    },
    hero: {
      badge: "Backend Developer",
      tagline:
        "Final-year IT student with hands-on experience building robust backend architectures in Java (Spring Boot) and deploying via Docker. Focused on creating scalable, maintainable, and high-performance server-side solutions.",
      cta: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
    },
    skills: {
      heading: "Technical Skills",
      cat: {
        languages: "Programming Languages",
        databases: "Databases",
        frameworks: "Frameworks / Libraries",
        tools: "Tools",
      },
    },
    projects: {
      heading: "Projects",
    },
    project: {
      tab: {
        demo: "Demo",
        diagram: "Diagram",
      },
      label: {
        problem: "Problem",
        approach: "Approach",
        result: "Result",
      },
      btn: {
        github: "GitHub",
        live_demo: "Live demo",
        chat_client: "Chat client",
        download: "Download",
      },
      social: {
        date: "Feb 2026 - Apr 2026",
        problem:
          "A 4-person team needed a social backend that could handle posts, follows, and chat without client polling draining performance, while keeping messaging decoupled from the core API.",
        approach:
          "Built JWT-authenticated REST APIs for posts, likes, and follows; pushed activity updates with Server-Sent Events instead of polling; sped up the friend-request/auto-follow flow with composite indexes; and wrote a custom reverse proxy inside Spring Boot to route chat traffic to a separate Node.js service, propagating auth headers between the two.",
        result:
          "A working platform with a live web demo and a separate real-time chat client, deployed on Render via Docker as the backend developer on a 4-person team.",
        diagram_client: "USER / CLIENT",
        diagram_caption: "Deployed on Render via Docker",
      },
      fish: {
        date: "May 2026 - July 2026",
        problem:
          "A retail business selling to both wholesale (B2B) and retail (B2C) customers needed one system for inventory, orders, and staff access — with rules like batch expiry, unit conversion, and time-based pricing too specific for an off-the-shelf e-commerce platform.",
        approach:
          "Built the backend end-to-end with Spring Boot and MySQL: JWT-based RBAC for Admin/Staff/Customer roles, FIFO batch tracking with dynamic unit conversion and perishable-goods handling, scheduled jobs plus SSE to alert staff about expiring stock, a credit/debt ledger for wholesale customers, and VNPAY for online payment.",
        result:
          "A full-stack solution (Spring Boot + ReactJS + MySQL) that automatically adjusts order fulfillment when stock runs short instead of failing silently.",
        diagram_caption: "Backend built with Spring Boot & MySQL",
      },
      snake: {
        date: "May 2026 - Jul 2026",
        problem:
          "Misidentifying a venomous snake in the field can be life-threatening, and most people have no fast way to check a species, its venom level, or first-aid steps on the spot.",
        approach:
          "Collected and labeled a dataset of 18 common snake species, trained a YOLOv11 model on it, and built a FastAPI backend (OpenCV for image/video processing) that runs inference from a photo, uploaded video, or live camera feed, then looks up venom level and first-aid info and logs every detection to SQLite. A plain HTML/JS frontend renders the annotated bounding box with a color-coded danger alert.",
        result:
          "A working detector across 18 species that flags venom level and first-aid steps in real time — e.g. 95% confidence identifying a king cobra — with a searchable species database and full detection history.",
        diagram_caption: "FastAPI + YOLOv11 backend, SQLite storage",
      },
      posture: {
        date: "Feb 2026 - May 2026",
        problem:
          "Long coding sessions lead to slouching, and most posture-tracking tools either need a cloud connection or ignore that everyone's body proportions are different.",
        approach:
          "Used Google's MediaPipe Pose Landmarker (BlazePose) to read webcam input locally, added a one-time calibration step so the model adapts to each user's own sitting posture, and packaged the whole thing as an offline Electron app with SQLite for local history and a background tray process for continuous monitoring.",
        result:
          "A 100% offline Windows app that escalates from a quiet nudge to sound and system notifications the longer you stay slouched, with a daily dashboard of incidents and total violation time.",
        diagram_caption: "100% offline Windows desktop app",
      },
    },
    education: {
      heading: "Education",
      degree: "Bachelor of Information Technology",
      major: "Major in Software Engineering",
    },
    certificates: {
      heading: "Certificates",
      toeic_score: "Score: 620",
      jlpt_level: "Level: N4",
    },
    footer: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      skills: "Kỹ năng",
      projects: "Dự án",
      education: "Học vấn",
      contact: "Liên hệ",
    },
    header: {
      resume: "CV",
    },
    hero: {
      badge: "Lập trình viên Backend",
      tagline:
        "Sinh viên CNTT năm cuối với kinh nghiệm thực tế xây dựng kiến trúc backend vững chắc bằng Java (Spring Boot) và triển khai qua Docker. Tập trung vào việc tạo ra các giải pháp phía server có khả năng mở rộng, dễ bảo trì và hiệu năng cao.",
      cta: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
    },
    skills: {
      heading: "Kỹ năng kỹ thuật",
      cat: {
        languages: "Ngôn ngữ lập trình",
        databases: "Cơ sở dữ liệu",
        frameworks: "Framework / Thư viện",
        tools: "Công cụ",
      },
    },
    projects: {
      heading: "Dự án",
    },
    project: {
      tab: {
        demo: "Demo",
        diagram: "Sơ đồ",
      },
      label: {
        problem: "Vấn đề",
        approach: "Cách tiếp cận",
        result: "Kết quả",
      },
      btn: {
        github: "GitHub",
        live_demo: "Bản demo trực tiếp",
        chat_client: "Ứng dụng chat",
        download: "Tải xuống",
      },
      social: {
        date: "Th.2/2026 - Th.4/2026",
        problem:
          "Một nhóm 4 người cần một backend mạng xã hội có thể xử lý bài đăng, theo dõi và chat mà không làm giảm hiệu năng do client polling liên tục, đồng thời tách biệt hệ thống nhắn tin khỏi API lõi.",
        approach:
          "Xây dựng REST API xác thực bằng JWT cho bài đăng, lượt thích và theo dõi; đẩy cập nhật hoạt động bằng Server-Sent Events thay vì polling; tăng tốc luồng gửi kết bạn/tự động theo dõi bằng composite index; và viết một reverse proxy tùy chỉnh trong Spring Boot để định tuyến traffic chat sang một service Node.js riêng, đồng thời truyền header xác thực giữa hai bên.",
        result:
          "Một nền tảng hoạt động hoàn chỉnh với bản demo web trực tiếp và một ứng dụng chat thời gian thực riêng biệt, được triển khai trên Render qua Docker, với vai trò backend developer trong nhóm 4 người.",
        diagram_client: "NGƯỜI DÙNG / CLIENT",
        diagram_caption: "Triển khai trên Render qua Docker",
      },
      fish: {
        date: "Th.5/2026 - Th.7/2026",
        problem:
          "Một doanh nghiệp bán lẻ phục vụ cả khách sỉ (B2B) và khách lẻ (B2C) cần một hệ thống duy nhất cho quản lý tồn kho, đơn hàng và phân quyền nhân viên — với các quy tắc như hạn sử dụng theo lô, quy đổi đơn vị và định giá theo thời gian quá đặc thù để dùng nền tảng thương mại điện tử có sẵn.",
        approach:
          "Xây dựng toàn bộ backend bằng Spring Boot và MySQL: phân quyền RBAC dựa trên JWT cho vai trò Admin/Nhân viên/Khách hàng, theo dõi lô hàng theo FIFO với quy đổi đơn vị động và xử lý hàng dễ hỏng, scheduled job kết hợp SSE để cảnh báo nhân viên khi hàng sắp hết hạn, sổ công nợ cho khách sỉ, và tích hợp VNPAY để thanh toán online.",
        result:
          "Một giải pháp full-stack (Spring Boot + ReactJS + MySQL) tự động điều chỉnh việc xử lý đơn hàng khi thiếu hàng thay vì âm thầm thất bại.",
        diagram_caption: "Backend xây dựng bằng Spring Boot & MySQL",
      },
      snake: {
        date: "Th.5/2026 - Th.7/2026",
        problem:
          "Nhận diện sai một loài rắn độc ngoài thực địa có thể nguy hiểm đến tính mạng, trong khi hầu hết mọi người không có cách nào nhanh chóng để kiểm tra loài, mức độ độc hay cách sơ cứu ngay tại chỗ.",
        approach:
          "Thu thập và gán nhãn bộ dữ liệu gồm 18 loài rắn phổ biến, huấn luyện mô hình YOLOv11 trên đó, và xây dựng backend FastAPI (dùng OpenCV để xử lý ảnh/video) chạy suy luận từ ảnh chụp, video tải lên hoặc camera trực tiếp, sau đó tra cứu mức độ độc và thông tin sơ cứu, đồng thời ghi lại mọi lần nhận diện vào SQLite. Frontend HTML/JS thuần hiển thị khung nhận diện kèm cảnh báo nguy hiểm theo màu sắc.",
        result:
          "Một bộ nhận diện hoạt động trên 18 loài, hiển thị mức độ độc và hướng dẫn sơ cứu theo thời gian thực — ví dụ nhận diện rắn hổ mang chúa với độ tin cậy 95% — kèm cơ sở dữ liệu loài có thể tra cứu và lịch sử nhận diện đầy đủ.",
        diagram_caption: "Backend FastAPI + YOLOv11, lưu trữ SQLite",
      },
      posture: {
        date: "Th.2/2026 - Th.5/2026",
        problem:
          "Các phiên code kéo dài dễ khiến người dùng ngồi khom lưng, trong khi hầu hết công cụ theo dõi tư thế đều cần kết nối cloud hoặc bỏ qua việc tỷ lệ cơ thể mỗi người là khác nhau.",
        approach:
          "Sử dụng MediaPipe Pose Landmarker (BlazePose) của Google để đọc dữ liệu webcam cục bộ, thêm bước hiệu chỉnh một lần để mô hình thích ứng với tư thế ngồi riêng của từng người dùng, và đóng gói toàn bộ thành ứng dụng Electron offline với SQLite lưu lịch sử cục bộ cùng tiến trình chạy nền trên tray để theo dõi liên tục.",
        result:
          "Một ứng dụng Windows hoạt động 100% offline, tăng dần mức cảnh báo từ nhắc nhở nhẹ nhàng đến âm thanh và thông báo hệ thống nếu người dùng tiếp tục ngồi khom lưng, kèm dashboard hàng ngày thống kê số lần vi phạm và tổng thời gian vi phạm.",
        diagram_caption: "Ứng dụng desktop Windows hoạt động 100% offline",
      },
    },
    education: {
      heading: "Học vấn",
      degree: "Cử nhân Công nghệ Thông tin",
      major: "Chuyên ngành Kỹ thuật Phần mềm",
    },
    certificates: {
      heading: "Chứng chỉ",
      toeic_score: "Điểm: 620",
      jlpt_level: "Trình độ: N4",
    },
    footer: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      skills: "スキル",
      projects: "プロジェクト",
      education: "学歴",
      contact: "お問い合わせ",
    },
    header: {
      resume: "履歴書",
    },
    hero: {
      badge: "バックエンドエンジニア",
      tagline:
        "Java（Spring Boot）を用いた堅牢なバックエンドアーキテクチャの構築と、Dockerによるデプロイの実務経験を持つIT学科最終学年の学生です。スケーラブルで保守性が高く、高パフォーマンスなサーバーサイドソリューションの構築に注力しています。",
      cta: {
        email: "メール",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
    },
    skills: {
      heading: "技術スキル",
      cat: {
        languages: "プログラミング言語",
        databases: "データベース",
        frameworks: "フレームワーク・ライブラリ",
        tools: "ツール",
      },
    },
    projects: {
      heading: "プロジェクト",
    },
    project: {
      tab: {
        demo: "デモ",
        diagram: "図",
      },
      label: {
        problem: "課題",
        approach: "アプローチ",
        result: "成果",
      },
      btn: {
        github: "GitHub",
        live_demo: "ライブデモ",
        chat_client: "チャットクライアント",
        download: "ダウンロード",
      },
      social: {
        date: "2026年2月 - 2026年4月",
        problem:
          "4人チームは、投稿・フォロー・チャットを処理できるソーシャルバックエンドを必要としていましたが、クライアント側のポーリングによるパフォーマンス低下を避けつつ、メッセージング機能をコアAPIから切り離す必要がありました。",
        approach:
          "投稿・いいね・フォロー機能のためにJWT認証付きREST APIを構築し、ポーリングの代わりにServer-Sent Eventsでアクティビティ更新をプッシュ配信。複合インデックスでフレンドリクエスト・自動フォローの流れを高速化し、Spring Boot内にカスタムリバースプロキシを実装してチャットトラフィックを別のNode.jsサービスへルーティングしつつ、両者間で認証ヘッダーを伝播させました。",
        result:
          "ライブWebデモとは別にリアルタイムチャットクライアントを備えた、実際に動作するプラットフォームをDockerでRenderにデプロイ。4人チームのバックエンド開発者として担当しました。",
        diagram_client: "ユーザー / クライアント",
        diagram_caption: "DockerでRenderにデプロイ",
      },
      fish: {
        date: "2026年5月 - 2026年7月",
        problem:
          "卸売（B2B）と小売（B2C）の両方に販売する小売業者が、在庫・注文・スタッフ権限を一元管理できるシステムを必要としていました。ロット単位の期限管理、単位換算、時間帯別価格設定など、既製のECプラットフォームでは対応しきれない独自ルールが求められていました。",
        approach:
          "Spring BootとMySQLでバックエンドをエンドツーエンドで構築：Admin/スタッフ/顧客ロール向けのJWTベースRBAC、動的単位換算と生鮮品対応を備えたFIFOロット管理、期限切れ間近の在庫をスタッフに通知するスケジュールジョブとSSE、卸売顧客向けの貸し借り台帳、オンライン決済のためのVNPAY連携を実装しました。",
        result:
          "在庫不足時に注文処理を自動調整し、サイレントに失敗させない、フルスタックソリューション（Spring Boot + ReactJS + MySQL）を実現しました。",
        diagram_caption: "Spring BootとMySQLで構築したバックエンド",
      },
      snake: {
        date: "2026年5月 - 2026年7月",
        problem:
          "野外で毒蛇を誤認すると命に関わることがありますが、その場で種類や毒性の強さ、応急処置の方法を素早く確認する手段を持つ人はほとんどいません。",
        approach:
          "18種の一般的な蛇のデータセットを収集・ラベル付けしてYOLOv11モデルを学習させ、写真・アップロード動画・ライブカメラ映像から推論を行うFastAPIバックエンド（画像・動画処理にOpenCVを使用）を構築しました。検出結果から毒性レベルと応急処置情報を照会し、検出履歴をSQLiteに記録します。素のHTML/JSフロントエンドが、色分けされた危険度アラートとともにバウンディングボックスを描画します。",
        result:
          "18種にわたって動作する検出システムを実現し、毒性レベルと応急処置をリアルタイムで表示します（例：キングコブラを95%の信頼度で識別）。検索可能な種データベースと完全な検出履歴も備えています。",
        diagram_caption: "FastAPI + YOLOv11バックエンド、SQLiteストレージ",
      },
      posture: {
        date: "2026年2月 - 2026年5月",
        problem:
          "長時間のコーディングは猫背を招きますが、既存の姿勢トラッキングツールの多くはクラウド接続を必要とするか、人によって体格が異なることを考慮していません。",
        approach:
          "GoogleのMediaPipe Pose Landmarker（BlazePose）を使用してウェブカメラ入力をローカルで処理し、ユーザーごとの座り方にモデルが適応するよう1回限りのキャリブレーションステップを追加。SQLiteによるローカル履歴保存と、常時監視のためのバックグラウンドトレイプロセスを備えたオフラインのElectronアプリとしてパッケージ化しました。",
        result:
          "猫背が続くほど、静かな通知から音やシステム通知へと段階的にエスカレートする、完全オフライン動作のWindowsアプリを実現。違反回数と合計違反時間を表示する日次ダッシュボードも備えています。",
        diagram_caption: "完全オフライン動作のWindowsデスクトップアプリ",
      },
    },
    education: {
      heading: "学歴",
      degree: "情報技術学士",
      major: "専攻：ソフトウェアエンジニアリング",
    },
    certificates: {
      heading: "資格",
      toeic_score: "スコア: 620",
      jlpt_level: "レベル: N4",
    },
    footer: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "メール",
    },
  },
};
