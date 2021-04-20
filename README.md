# CollegeApi
中国高校信息服务
---
title: CollegeServer v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2


---

# CollegeServer

> v1.0.0

# 高校

## GET 获取学校专业

GET /school/special/{id}

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 说明   |
| ---- | ---- | ------ | ---- | ------ |
| id   | path | string | true | 院校ID |

> 返回示例

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 获取学校详情

GET /school/detail/{school_id}

### 请求参数

| 名称      | 位置 | 类型   | 必选 | 说明   |
| --------- | ---- | ------ | ---- | ------ |
| school_id | path | string | true | 院校ID |

> 返回示例

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 获取高校列表

POST /school/lists

### 请求参数

| 名称          | 位置  | 类型   | 必选  | 说明                                                         |
| ------------- | ----- | ------ | ----- | ------------------------------------------------------------ |
| admissions    | query | string | false | 院校特色：强基计划 0                                         |
| central       | query | string | false | 院校特色：中央部委 0                                         |
| department    | query | string | false | 院校特色：教育部直属 0                                       |
| dual_class    | query | string | false | 院校特色：38000(一流学科建设高校)38001(一流大学建设高校A类) 38002(一流大学建设高校B类) |
| f211          | query | string | false | 211高校 0                                                    |
| f985          | query | string | false | 985高校 0                                                    |
| is_doublehigh | query | string | false | 双高计划 0                                                   |
| keyword       | query | string | false | 关键词                                                       |
| nature        | query | string | false | 办学类型：36000（公办） 360001（私办）                       |
| page          | query | string | false | 查询页码                                                     |
| province_id   | query | string | false | 省份                                                         |
| school_type   | query | string | false | 办学类型："普通本科": "6000","专科（高职)": "6001","中外合作办学": "6003", |
| size          | query | string | false | 分页大小                                                     |
| type          | query | string | false | 院校类型：   "综合": 5000,"理工": 5001,"农林": 5002,"医药": 5003,"师范": 5004,"语言": 5005,"财经": 5006,"政法": 5007,"体育": 5008,"艺术": 5009,"民族": 5010,"军事": 5011,"其他": 5012 |
| uri           | query | string | true  | none                                                         |
| is_dual_class | query | string | false | 是否双一流 0                                                 |
| sort          | query | string | false | 排序方法：view_total（总人气）view_month（月人气）view_week（周人气） |

> 返回示例

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 学校热度

POST /gkcx/api/

### 请求参数

| 名称      | 位置  | 类型   | 必选  | 说明   |
| --------- | ----- | ------ | ----- | ------ |
| school_id | query | string | false | 学校id |
| uri       | query | string | false | none   |

> 返回示例

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 获取高校评分

GET /school/vote/{id}

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 说明   |
| ---- | ---- | ------ | ---- | ------ |
| id   | path | string | true | 院校ID |

> 返回示例

> 成功

```json
{
  "code": "1000"
}
```

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## GET 获取学校就业率

GET /school/jobdetail/{id}

### 请求参数

| 名称 | 位置 | 类型   | 必选 | 说明   |
| ---- | ---- | ------ | ---- | ------ |
| id   | path | string | true | 院校ID |

> 返回示例

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 地区

## GET 获取省城信息

GET /location/location

> 返回示例

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

## POST 城市

POST /gkcx/api

### 请求参数

| 名称      | 位置  | 类型   | 必选  | 说明 |
| --------- | ----- | ------ | ----- | ---- |
| uri       | query | string | false | none |
| vote      | query | string | false | none |
| school_id | query | string | false | none |

> 返回示例

### 返回结果

| 状态码 | 状态码含义                                              | 说明 | 数据模型 |
| ------ | ------------------------------------------------------- | ---- | -------- |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | 成功 | Inline   |

### 返回数据结构

# 数据模型

<h2 id="tocS_Tag">Tag</h2>

<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "minimum": 1,
      "description": "标签ID编号"
    },
    "name": {
      "type": "string",
      "description": "标签名称"
    }
  },
  "xml": {
    "name": "Tag"
  }
}

```

### 属性

| 名称 | 类型           | 必选  | 约束 | 说明       |
| ---- | -------------- | ----- | ---- | ---------- |
| id   | integer(int64) | false | none | 标签ID编号 |
| name | string         | false | none | 标签名称   |

<h2 id="tocS_Pet">Pet</h2>

<!-- backwards compatibility -->
<a id="schemapet"></a>
<a id="schema_Pet"></a>
<a id="tocSpet"></a>
<a id="tocspet"></a>

```json
{
  "required": [
    "name",
    "photoUrls",
    "id",
    "category",
    "tags",
    "status"
  ],
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "minimum": 1,
      "maximum": 5000,
      "description": "宠物ID编号"
    },
    "category": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64",
          "minimum": 1,
          "description": "分类ID编号"
        },
        "name": {
          "type": "string",
          "description": "分类名称"
        }
      },
      "xml": {
        "name": "Category"
      }
    },
    "name": {
      "type": "string",
      "example": "doggie",
      "description": "名称"
    },
    "photoUrls": {
      "type": "array",
      "xml": {
        "name": "photoUrl",
        "wrapped": true
      },
      "items": {
        "type": "string"
      },
      "description": "照片URL"
    },
    "tags": {
      "type": "array",
      "xml": {
        "name": "tag",
        "wrapped": true
      },
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "minimum": 1,
            "description": "标签ID编号"
          },
          "name": {
            "type": "string",
            "description": "标签名称"
          }
        },
        "xml": {
          "name": "Tag"
        }
      },
      "description": "标签"
    },
    "status": {
      "type": "string",
      "description": "宠物销售状态",
      "enum": [
        "available",
        "pending",
        "sold"
      ]
    }
  },
  "xml": {
    "name": "Pet"
  }
}

```

### 属性

| 名称      | 类型                        | 必选 | 约束 | 说明         |
| --------- | --------------------------- | ---- | ---- | ------------ |
| id        | integer(int64)              | true | none | 宠物ID编号   |
| category  | [Category](#schemacategory) | true | none | none         |
| name      | string                      | true | none | 名称         |
| photoUrls | [string]                    | true | none | 照片URL      |
| tags      | [[Tag](#schematag)]         | true | none | 标签         |
| status    | string                      | true | none | 宠物销售状态 |

#### 枚举值

| 属性   | 值        |
| ------ | --------- |
| status | available |
| status | pending   |
| status | sold      |

<h2 id="tocS_Category">Category</h2>

<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int64",
      "minimum": 1,
      "description": "分类ID编号"
    },
    "name": {
      "type": "string",
      "description": "分类名称"
    }
  },
  "xml": {
    "name": "Category"
  }
}

```

### 属性

| 名称 | 类型           | 必选  | 约束 | 说明       |
| ---- | -------------- | ----- | ---- | ---------- |
| id   | integer(int64) | false | none | 分类ID编号 |
| name | string         | false | none | 分类名称   |


