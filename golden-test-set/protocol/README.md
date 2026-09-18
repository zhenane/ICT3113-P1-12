# Labelling Protocol

Step 1 deliverable, written **before** any labelling begins.

Contents:
- Definition of each of the 7 categories (Credit reporting, Debt collection,
  Mortgage, Credit card, Bank account or service, Consumer loan, Money
  transfer or service).
- Rules for edge cases: tickets that fit two categories, tickets that fit
  none, ambiguous narratives.
- A revision log — record every change made after a disagreement revealed a
  gap in the protocol, with the date/commit and reason.

# Version 1:
## Categories:
1. Credit Reporting
  - Definition: Issues involving collection, maintenance, investigation, correction, or sharing of credit-report information
  - Typical indicators:
    - Credit report, credit bureau, inaccurate information, incorrect late payment, credit score, account appearing on credit report, identity information on credit report
  - Positive Example: "My credit report shows a late payment on an account that I paid on time. I contacted the credit bureau but the information has not been corrected."
  - Boundary: If the complaint is about the underlying credit card/loan itself rather than how it is reported on a credit report, label it according to the underlying financial service.
2. Debt Collection
  - Definition: Issues involving attempts by a company or individual to collect, recover, or enforce payment of a debt allegedly owed by a consumer, including disputes about whether the debt is owed and the methods used to collect it.
  - Typical indicators:
    - Debt Collector, Collection Agency, Debt Collection, Attempting to collect a debt, Debt owed / not owed, Debt already paid Medical debt, Credit card debt being collected, Repeated collection calls or messages, Threats of legal action, arrest, or other consequences, Dispute over the amount of debt, Debt resulting from identity theft, Request to verify or provide information about a debt
  - Positive Example:"A collection agency keeps calling me about a medical debt that I already paid. I have provided proof of payment, but they continue demanding that I pay the debt."
  - Boundary: If the complaint concerns a company trying to collect an existing or alleged debt, classify it as Debt Collection even when the original debt came from another product such as a credit card, mortgage, or medical service. If the complaint instead concerns the operation or servicing of the underlying financial product itself, classify it according to that product.
3. Mortgage
  - Definition: Issues involving loans or lines of credit secured by residential property, including obtaining, refinancing, closing, servicing, repaying, or modifying a mortgage.
  - Typical indicators: Mortgage, Home loan, Home equity loan, HELOC, Mortgage servicer, Mortgage payment, Escrow, Property taxes or mortgage insurance, Refinancing, Mortgage interest rate, Foreclosure, Loan modification, Forbearance, Short sale, Mortgage closing, Principal and interest, Lien release
  - Positive Example: "My mortgage servicer increased my monthly payment because of an escrow adjustment. I believe the new amount is incorrect and want the payment recalculated."
  - Boundary: If the complaint concerns a mortgage or home-secured loan, classify it as Mortgage even when the issue involves payments, interest, escrow, foreclosure, or loan modification. If the primary complaint is specifically about information appearing on a credit report, classify it as Credit Reporting instead.
4. Credit Card
  - Definition: Issues involving a credit card or charge card, including obtaining, using, paying, servicing, billing, fees, interest, transactions, or closing the card account.
  - Typical indicators: Credit card, Card issuer,Card account, Credit limit, Credit card payment, Credit card bill, Unauthorized card transaction, Billing dispute, Interest rate / interest charge, Late fee, Annual fee, Cash advance, Balance transfer, Card application, Card replacement, Card not working, Credit card account closure, Rewards / points / cashback
  - Positive Example: "My credit card statement contains a charge that I did not make. I reported the transaction to the card company, but they have not resolved my billing dispute."
  - Boundary: If the complaint concerns the credit card account or its transactions, fees, payments, or servicing, classify it as Credit Card. If the complaint concerns how the credit card information is being reported on a credit report, classify it as Credit Reporting.
5. Bank Account or Service
  - Definition: Issues involving deposit accounts and general banking services, including opening, managing, accessing, using, or closing checking, savings, certificate-of-deposit, and other banking accounts or services.
  - Typical indicators: Checking account, Savings account, Bank account, Deposit, Withdrawal, ATM, Debit card, Bank transfer/payment from an account, Account access, Account freeze, Account closure, Overdraft, Insufficient funds, Check, Bank fee, Banking error, Direct deposit, Funds unavailable, Unauthorized withdrawal, Bank account opened without consent
  - Positive Example: "My bank froze my checking account and I cannot access the money in it. I have contacted the bank several times but have not received an explanation for the account freeze."
  - Boundary: Use this category for general banking/deposit-account issues. If the complaint is primarily about a credit card, mortgage, consumer loan, or money-transfer service, use that specific category instead. If the issue concerns a credit report or credit score, classify it as Credit Reporting.
6. Consumer Loan
  - Definition: Issues involving loans or lines of credit provided to consumers for personal, family, or household purposes, other than mortgages and credit cards.
  - Typical indicators: Personal loan, Installment loan, Consumer loan, Payday loan, Title loan, Personal line of credit, Auto/vehicle loan, Student loan, Loan application, Loan approval or denial, Loan payment, Loan balance, Loan interest, Loan fees, Loan servicer, Repayment plan, Loan payoff, Repossession, Loan received without authorization
  - Positive Example: "I received a personal loan that I never applied for, and the lender is now asking me to make payments on the account."
  - Boundary: Use Consumer Loan when the primary financial product is a consumer loan rather than a mortgage or credit card. If a third party is attempting to collect an overdue loan debt, the complaint may instead concern Debt Collection. If the complaint is specifically about how the loan is reported on a credit report, use Credit Reporting.
7. Money Transfer or Service
 - Definition: Issues involving services whose primary function is transferring, sending, receiving, exchanging, storing, or otherwise facilitating the movement of money or monetary value between parties.
 - Typical indicators: Money transfer, Wire transfer, Remittance, Sending money, Receiving money, Transfer not received, Transfer delayed, Wrong transfer amount, Transfer fee, Exchange rate, Money-transfer service, Payment app, Mobile wallet, Digital wallet, Cash App, Venmo, Money order, Cashier's check, Traveler's check, Check-cashing service, Foreign currency exchange, Unauthorized transfer, Transfer fraud/scam
 - Positive Example: "I sent $500 through a money-transfer service to a family member, but the recipient never received the money. The company has not returned the funds or explained what happened."
 - Boundary: Use this category when the money-transfer/payment service itself is the subject of the complaint. A bank account may be involved in the transaction, but if the complaint is about the transfer service, transfer, payment app, remittance, or movement of funds, classify it as Money Transfer or Service. If the complaint is about the underlying checking or savings account itself, use Bank Account or Service.

 ## Step by step workflow
 1. Read full complaint
 2. Extract primary pain point, ignore polite and impolite filler words, frustrations. Identify core issue of that made the consumer complain.
 3. Identify category which describes that core problem
 4. If core problem overlaps multiple categories, determine which one describes the object of the complaint, not just counting keywords.
  - For example: "My credit card company reported a payment as late even though I paid on time."
    Mentions: credit card
    Core issue: inaccurate credit reporting
    → Credit Reporting
  - Whereas: "My credit card company charged me interest even though I paid my balance."
    Mentions: payment
    Core issue: credit-card billing/interest
    → Credit Card
  - And: "A collection agency is demanding payment for my credit-card debt."
    Mentions: credit card
    Core issue: debt collection
    → Debt Collection
  5. If unable to categorise, label as TBD case for discussion before revision
  6. Do not modify the protocol while labeling, proposed changes should be discussed before revision and recorded in revision logs.