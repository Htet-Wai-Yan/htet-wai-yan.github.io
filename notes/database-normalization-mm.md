# ဒေတာဘေ့စ် ပုံမှန်ပြင်ဆင်ခြင်း (Database Normalization)

ဤလမ်းညွှန်းသည် **အွန်လိုင်းစတိုင်** တစ်ခု၏ ဥပမာကို အသုံးပြု၍ ရှင်းပြထားပါသည်။ ဖောက်သည်များထံ ထုတ်ကုန်များရောင်းချသော စီးပွားရေးဖြစ်ပါတယ်။ ဒေတာများကို အဆင့်ဆင့် ပြင်ဆင်သွားမည်ဖြစ်သည်။

---

## 1NF - ပထမပုံမှန်ပြင်ဆင်ခြင်း
**စည်းမျဉ်း:** Cell တစ်ခုချင်းစီသည် တန်ဖိုးတစ်ခုတည်းသာ ရှိရမည်။ ထပ်ခါ တူညီသော အုပ်စုများ မရှိရ။

Order များကို လိုက်�追踪လုပ်သော spreadsheet တစ်ခုကို စဉ်းစားပါ။ Column တစ်ခုတွင် တန်ဖိုးများစွာ မရှိသင့်ပ�။

### မတိုင်မီ (1NF မဟုတ်)
| order_id | ဖောက်သည် | ထုတ်ကုန်များ              | စုစုပေါင်း |
|----------|----------|---------------------------|----------|
| 1        | Alice    | Laptop, Mouse, Cable     | $1500    |
| 2        | Bob      | Keyboard                 | $200     |

`ထုတ်ကုန်များ` column တွင် ကော်မာဖြင့် ခွဲ၍ ထုတ်ကုန်များစွာ ရှိနေပါသည်။ ဒါသည် မှန်ကန်မှု မရှိပါ။

### ပြီးနောက် (1NF)
| order_id | ဖောက်သည် | ထုတ်ကုန် | စျေးနှုန်း |
|----------|----------|-----------|------------|
| 1        | Alice    | Laptop    | $1000      |
| 1        | Alice    | Mouse     | $50        |
| 1        | Alice    | Cable     | $50        |
| 2        | Bob      | Keyboard  | $200       |

Row တိုင်းသည် ထုတ်ကုန်တစ်ခုတည်းသာ ရှိပါတယ်။

### PostgreSQL
```sql
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id)
);

CREATE TABLE order_items (
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    price_at_purchase DECIMAL(10, 2),
    PRIMARY KEY (order_id, product_id)
);
```

---

## 2NF - ဒုတိယပုံမှန်ပြင်ဆင်ခြင်း
**စည်းမျဉ်း:** 1NF ရှိရမည်။ Column တိုင်း�ည် key တစ်ခုလုံးကို မှီခိုရမည်။

Primary key သည် column ၂ ခု ပါရင် (composite key)၊ ဘာမှ တစ်ခုခုတည်းကိုသာ မှီခိုမနေရ။

### ပြဿနာ
`order_items` တွင် composite key ၂ ခု ရှိပါတယ်: (`order_id`, `product_id`)။

`customer_name` ကို `order_items` ထဲသို့ ထည့်ပါမယ်။

| order_id | product_id | customer_name | price |
|----------|------------|---------------|-------|
| 1        | 1          | Alice         | $1000 |
| 1        | 2          | Alice         | $50   |

`customer_name` သည် `order_id` တစ်ခုတည်းကိုသာ မှီခိုပါ။ `product_id` နဲ့ သက်ဆိုင်မှု မရှိပါ။

### ပြီးနောက် (2NF)
`customer_name` ကို `orders` table သို့ ရွှေ့ပါ။

```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    order_date TIMESTAMP
);
```

Table တိုင်းသည် ၎င်းနဲ့သင့်တော်တဲ့ data များသာ ရှိပါတယ်:
- `orders` → order အဆင့်အချက်အလက်များ (customer, date)
- `order_items` → line-item အချက်အလက်များ (product, price)

---

## 3NF - တတိယပုံမှန်ပြင်ဆင်ခြင်း
**စည်းမျဉ်း:** 2NF ရှိရမည်။ Column တစ်ခုသည် key မဟုတ်တဲ့ column တစ်ခုကို မှီခိုမနေရ။

တန်ဖိုးတစ်ခုကို အခြားတန်ဖိုးများကနေ တွက်ထုတ်လို့ ရနိုင်ရင်၊ သိမ်းစရာ မလိုပ�။

### ပြဿနာ
`order_items` တွင် `price` နှင့် `quantity` သိမ်းပြီး `subtotal` (ကိုယ်စားပြယ်) ကိုလည်း သိမ်းထားပါမယ်။

| order_id | product_id | price | quantity | subtotal |
|----------|------------|-------|----------|----------|
| 1        | 1          | $1000 | 2        | $2000    |

`subtotal` = `price * quantity` ဖြစ်ပါတယ်။ တွက်ထုတ်လို့ ရနိုင်ပါတယ်။ သိမ်းထားရင် error ဖြစ်နိုင်ပါတယ်။

### ပြီးနောက် (3NF)
`subtotal` ကို ဖယ်ရှားပါ။ လိုတဲ့အခါ တွက်ပါ။

```sql
CREATE TABLE order_items (
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    quantity INT,
    price_at_purchase DECIMAL(10, 2),
    PRIMARY KEY (order_id, product_id)
);

-- subtotal ကို query တွင် တွက်ထုတ်:
SELECT 
    order_id,
    product_id,
    quantity,
    price_at_purchase,
    quantity * price_at_purchase AS subtotal
FROM order_items;
```

---

## BCNF - Boyce-Codd Normal Form
**စည်းမျဉ်း:** 3NF ထက် ပိုမိုကောင်းမွန်သော ပုံစံ။ Column များက အခြားတစ်ခုကို ဆုံးဖြတ်သော ပြဿနာများကို ဖြေရှင်းသည်။

### ပြဿနာ
Order များအတွက် support agent များကို ထည့်ပါမယ်:

| order_id | customer_id | agent_id | agent_name |
|----------|-------------|----------|------------|
| 1        | 100         | A1       | John       |
| 2        | 101         | A1       | John       |
| 3        | 102         | A2       | Jane       |

- Order တိုင်းတွင် agent တစ်ယောက်
- Agent တိုင်းသည် Order များစွာကို handle လုပ်ပါတယ်
- `agent_id` သည် `agent_name` ကို ဆုံးဖြတ်ပါတယ်

ဒါသည် BCNF ကို ချိုးဖောက်ပါတယ်။ `agent_id` သည် key မဟုတ်ပါ။

### ပြီးနောက် (BCNF)
Agents များကို ၎င်းနေရာ၎င်း table ခွဲပါ။

```sql
CREATE TABLE agents (
    agent_id VARCHAR(10) PRIMARY KEY,
    agent_name VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    agent_id VARCHAR(10) REFERENCES agents(agent_id)
);
```

---

## အနှစ်ချုပ်

| Level | ပြင်ဆင်ခြင်း |
|-------|-----------------|
| 1NF   | Cell တိုင်းတွင် တန်ဖိုးတစ်ခုတည်း။ |
| 2NF   | Column များကို key နဲ့ သင့်တော်တဲ့ table သို့ ရွှေ့ပါ။ |
| 3NF   | တွက်ထုတ်လို့ရတဲ့တန်ဖိုးများကို ဖယ်ရှားပါ။ |
| BCNF  | Key မဟုတ်တဲ့ column က အခြား column ကို ဆုံးဖြတ်တာများကို ပြင်ပါ။ |

---

*Last updated: 2026-03-24*
