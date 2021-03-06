const defaultTypes = {
    "Amount": "i128",
    "AmountOf": "Amount",
    "CurrencyId": "u32",
    "CurrencyIdOf": "CurrencyId",
    "Price": "FixedU128",
    "OracleKey": "CurrencyId",
    "Chain": {
        "_enum": [
            "Rio",
            "Bitcoin",
            "Litecoin",
            "Ethereum",
            "EOS",
            "Polkadot",
            "Kusama",
            "ChainX"
        ]
    },
    "AssetInfo": {
        "chain": "Chain",
        "symbol": "Text",
        "name": "Text",
        "decimals": "u8",
        "desc": "Text"
    },
    "FeeExchangeV1": {
        "max_payment": "Compact<Balance>"
    },
    "FeeExchange": {
        "_enum": {
            "V1": "Compact<FeeExchangeV1>"
        }
    },
    "Restriction": {
        "_enum": [
            "Transferable",
            "Depositable",
            "Withdrawable",
            "Slashable",
            "Reservable",
            "Unreservable"
        ]
    },
    "TxHash": "H256",
    "Deposit": {
        "account_id": "AccountId",
        "amount": "Balance"
    },
    "Auths": {
        "mask": "u8"
    },
    "Auth": {
        "_enum": [
            "Register",
            "Deposit",
            "Withdraw",
            "Sudo"
        ]
    },
    "WithdrawState": {
        "_enum": {
            "Pending":  null,
            "Cancelled": null,
            "Rejected": null,
            "Approved": null,
            "Success": "TxHash",
            "ReBroadcasted": "TxHash"
        }
    },
    "ChainAddress": "Bytes",
    "Memo": "Text",
    "WithdrawInfo": {
        "currency_id": "CurrencyId",
        "who": "AccountId",
        "value": "Balance",
        "addr": "ChainAddress",
        "memo": "Text"
    },
    "WithdrawItem": {
        "currency_id": "CurrencyId",
        "applicant": "AccountId",
        "value": "Balance",
        "addr": "ChainAddress",
        "memo": "Text",
        "state": "WithdrawState"
    },
    "DepositAddrInfo": {
        "_enum": {
            "Bip32": "Bip32",
            "Create2": "Create2"
        }
    },
    "Bip32": {
        "x_pub": "Text",
        "path": "Text"
    },
    "Create2": {
        "creator_address": "Vec<u8>",
        "implementation_address": "Vec<u8>",
        "vault_address": "Vec<u8>"
    },
    "String": "Text",
    "WithdrawItemForRpc": {
        "currencyId": "CurrencyId",
        "applicant": "AccountId",
        "value": "String",
        "addr": "String",
        "memo": "String",
        "state": "WithdrawState",
        "fee": "String"
    },
    "AccountDepositAddr": {
        "deposit_addr_info": "DepositAddrInfo",
        "index": "Option<u64>"
    },
    "riogateway": {
        "withdrawList": {
            "description": "get current withdraw list(include pending and approve)",
            "params": [
                {
                    "name": "at",
                    "isOptional": true
                }
            ],
            "type": "BTreeMap<u64, WithdrawItemForRpc>"
        },
        "pendingWithdrawList": {
            "description": "get current pending withdraw list",
            "params": [
                {
                    "name": "at",
                    "isOptional": true
                }
            ],
            "type": "BTreeMap<u64, WithdrawItemForRpc>"
        },
        "depositAddress": {
            "description": "get deposit address info for an account and asset, if this account have not apply, in bip32 path would return `nil`",
            "params": [
                {
                    "name": "at",
                    "who": "AccountId",
                    "currency_id": "CurrencyId",
                    "isOptional": true
                }
            ],
            "type": "DepositAddrForRpc"
        }
    }
}
