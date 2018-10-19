code on github
    with travis.yml
    aws lambda integrated with API Gateway
    maybe cloud formation template?

travis integrated with github
travis builds code, runs tests, deploys to AWS







prerequisites for deployment of lambda:
create role for lambda execution (my_role)
create travis IAM user
    should have passrole/getrole permission on my_role
    should have full access to lambda


- git init
- create github repository
- create account on travis-ci, snyc with github (add all repos)
- run travis login --pro --auto
- run travis encrypt "AWS ACCESS KEY ID" --add deploy.access_key_id --com
- run travis encrypt "AWS SECRET ACCESS KEY" --add deploy.secret_access_key --com

my_lambda_role:
AWSLambdaExecute

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1539973535000",
      "Effect": "Allow",
      "Action": [
        "lambda:CreateFunction",
        "lambda:GetFunction",
        "lambda:UpdateFunctionConfiguration",
        "lambda:UpdateFunctionCode"
      ],
      "Resource": [
        "arn:aws:lambda:*"
      ]
    }
  ]
}

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:GetRole",
                "iam:PassRole"
            ],
            "Resource": [
                "arn:aws:iam::441314088136:role/my_lambda_role"
            ]
        }
    ]
}